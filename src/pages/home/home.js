import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import clubshome from '../../images/clubshome.png';
import { Link } from 'react-router-dom';
import onlyClubs from '../../clubs.json';
import onlySocs from '../../societies.json';

import Title from '../../components/title/title';
import { EventCard } from '../../components/eventcard/eventcard';
import NewsRow from './newsRow';
// import { EnterCard } from '../../components/entercard/entercard';

import { API_BASE } from '../../constants';

let newsRequest = new XMLHttpRequest();
newsRequest.open('GET', `https://caic.iitd.ac.in/api/recentnews/`, false);
newsRequest.send();
let newsData = JSON.parse(newsRequest.responseText);
newsData = newsData.slice(0, 5);
export default function Home(){
	const [events, setEvents] = useState({});
	useEffect(() => {
		axios.get(`https://caic.iitd.ac.in/api/upcomingevents`).then((response) => {
			console.log('sending request');
			setEvents(response.data);
		});
	}, []);
	return (
		<div className='container-fluid rem-padding'>
			<Title title='CO-CURRICULAR AND ACADEMIC INTERACTION COUNCIL' image={clubshome} />
			<div className='row h-top'>
				<div className='col-md-7 h-top-left'>
					<h3 className='h-top-header'>ABOUT CAIC</h3>
					<p className='h-top-text'>
						The Co-curricular and Academic Interaction Council (CAIC) and its constituent bodies aim at maximal
						interaction between students and faculty, a good academic atmosphere and an efficient decision making
						process based on consultation; and through these it aims to promote an overall development of students for
						the maximum realization of their potential.
					</p>
					<h3 className='h-top-header '>TRYST - ANNUAL TECH-FEST</h3>
					<p className='h-top-text'>
						TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the
						student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through
						workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights,
						from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+
						events and participation of 40,000 students from all over the nation, team TRYST ensures there is something
						fun for everyone. Come aboard and have an experience of a lifetime!
					</p>
					<div className='mt-2'>
						<button type='button' className='btn h-top-btn'>
							<Link
								to='./tryst'
								className='event-link'
								onClick={() => window.scrollTo({ top: 0, behavior:'smooth' })}
							>
								More about TRYST
							</Link>
						</button>
					</div>
				</div>
				<div className='col-md-5 h-top-right'>
					{/* <div className=''>
						<button type='button' className='btn h-top-btn2'>
							Recent News
						</button>
						<ul className='list-group'>
							{newsData.map((news, id) => {
								return <NewsRow key={id} data={news} />;
							})}
						</ul>
					</div> */}
				</div>
			</div>

{/* clubs */}
			<div className='h-clubs-div h-clubs'>
				<h2 className='c-head'>CLUBS</h2>
				<div className='clubs-parent row c-cards clubs-home-scroll'>
					{onlyClubs.map((club, id) => {
						return (
							<div key={id} className='col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 clubs-card'>
								<Link to={`/club/${club.info.link}`}>
									<img src={club.info.image} className='img-bg rounded c-img' alt='...' />
								</Link>
							</div>
						);
					})}
				</div>
			</div>

{/* departmental societies */}
			<div className='h-clubs-div h-clubs'>
				<h2 className='c-head'>DEPARTMENTAL SOCIETIES</h2>
				<div className='clubs-parent row c-cards clubs-home-scroll'>
					{onlySocs.map((soc, id) => {
						return (
							<div key={id} className='col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 clubs-card'>
								<Link to={`/society/${soc.info.link}`}>
									<img src={soc.info.image} className='img-bg rounded c-img' alt='...' />
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
