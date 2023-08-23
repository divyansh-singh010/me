import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './events.css';
import clubsimage from '../../images/clubshome.png';
import Title from '../../components/title/title';
import EventsRow from './eventsRow';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export const Events = () => {
	const [events, setEvents] = useState({});
	useEffect(() => {
		axios.get(`https://caic.iitd.ac.in/api/upcomingevents`).then((response) => {
			console.log("sending request")
			setEvents(response.data);
		});
	}, []);
	return (
		<div className='container-fluid rem-padding'>
			<Title title='EVENTS' image={clubsimage} />

			<div className='container red-bor my-5 learnmore'>
				<div className='row'>
					<h4>UPCOMING EVENTS</h4>
					{Object.entries(events).map(([eventKey, eventValue]) => {
						// return (
						// 	<EventsRow
						// 		key={eventKey}
						// 		image={eventValue.image}
						// 		club={eventValue.club}
						// 		date={eventValue.date}
						// 		short_description={eventValue.short_description}
						// 		long_description={eventValue.long_description}
						// 		name={eventValue.name}
						// 		id={eventValue.id}
						// 		linkclub={eventValue.linkclub}
						// 	/>
						// );
					})}
				</div>
			</div>
		</div>
	);
};
