import React, { useState, useEffect } from 'react';
import './meetings.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title';
import MeetingTable from './meetingTable';
import { API_BASE } from '../../constants';

export const Meetings = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTableData()
      .then(data => {
        setTableData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function fetchTableData() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', `https://caic.iitd.ac.in/api/minutes/`, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(new Error('Request failed'));
        }
      };

      request.onerror = function () {
        reject(new Error('Request error'));
      };

      request.send();
    });
  }

  return (
    <React.Fragment>
      <Title title='MEETINGS' image={defBack} />
      <p className='meet-title-2'>Minutes of Meetings</p>
      <table className='table meetings-table'>
        <thead className='meetings-head'>
          <tr className='meeting-head-row'>
            <th scope='col'>Date</th>
            <th scope='col'>Type</th>
            <th scope='col'>Title</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <MeetingTable data={tableData} />
      </table>
    </React.Fragment>
  );
};
