import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './oneEvent.css';
import clubshome from '../../images/clubshome.png';
// import devLogo from '../../images/devLogo.png';
// import { EnterCard } from '../../components/entercard/entercard';
import Title from '../../components/title/title';
import { useLocation, useParams } from 'react-router-dom';
// import EventHelper from './eventHelper';
// import EventsRow from './eventsRow';

import { API_BASE } from '../../constants';

export const OneEvent = () => {
	const { club, id } = useParams();
	const [event, setEvent] = useState({});
	useEffect(() => {
		axios.get(`${API_BASE}/getevent/${club}/${id}`).then((response) => {
			console.log('sending request');
			setEvent(response.data);
		});
	}, []);
	const nextid = parseInt(id) + 1;
	const previd = parseInt(id) - 1;
	// console.log(nextid, previd);
	// console.log(event)
	return (
		<div className='container-fluid rem-padding'>
			<Title title='EVENTS' image={clubshome} />

			<div className='container assignment red-bor my-5'>
				<div className='row'>
					<div className='col-12 blue-bor'>
						<h4 className='my-4'>{event.name}</h4>
					</div>
					<div className='col-md-4 blue-bor my-3'>
						<img src={event.image} className='img-fluid' alt='' />
					</div>
					<div className='col-md-8 content blue-bor my-3'>
						<p>{event.long_description}</p>
						<p>Date: {event.date}</p>
						<p>
							Details: Can be found on {event.club}’s instagram page.
							{/* <a href={event.url}>Link</a> */}
						</p>
					</div>

					{id != 1 && (
						<div className='col-4 blue-bor btn1'>
							<button className='mx-5'>
								<i className='fa-solid fa-arrow-left'></i> &nbsp;{' '}
								<a className='event-link' href={`/getevent/${event.linkclub}/${previd}`}>
									Previous
								</a>
							</button>
						</div>
					)}
					{id == 1 && <div className='col-4 blue-bor btn1'></div>}
					<div className='col-4 blue-bor btn1'>
						<a href={event.url}>
							<button className='mx-5'>
								<i className='fa-solid '></i> &nbsp; Register
							</button>
						</a>
					</div>
					{id != event.maxid && (
						<div className='col-4 blue-bor btn2'>
							<a className='event-link' href={`/getevent/${event.linkclub}/${nextid}`}>
								<button className='mx-5'>
									Next &nbsp; <i className='fa-solid fa-arrow-right'></i>
								</button>
							</a>
						</div>
					)}
					{id == event.maxid && <div className='col-4 blue-bor btn2'></div>}
				</div>
			</div>
		</div>
	);
};
