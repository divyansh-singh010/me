import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './oneClub.css';
// import './bootstrap.css';

import Club1 from '../../images/club1.png';
import Club from '../../images/club.png';
import DevLogo from '../../images/devLogo.png';

import EventCard from '../../components/eventcard/eventcard';
import ProfileCard from '../../components/profilecard/profilecard';
import Title from '../../components/title/title';
import { API_BASE } from '../../constants';

export const OneClub = ({ props }) => {
	const [team, setTeam] = useState({ members: [], coordinators: [], head: {} });
	useEffect(() => {
		axios.get(`${API_BASE}/team/${props.info.url}`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	return (
		<div>
			<Title title={props.info.name} image={'https://drive.google.com/uc?id=1kFu_zsuYXb_yZ2Fie3KSlPWYALXpblLT'} />
			<div id='about' className='container green-bor'>
				<div className='row'>
					<div className='col-md-6 blue-bor'>
						<h3>ABOUT US</h3>
						<p>{props.info.about}</p>
						<button>Learn More</button>
					</div>
					<div className='col-md-6 blue-bor d-flex align-items-center justify-content-center'>
						<img src={props.info.image} alt='' />
					</div>
				</div>
			</div>

			<div id='long_poster' className='green-bor'>
			</div>
			<div className='one-team-parent'>
				<h2>TEAM</h2>
				<div className='one-team'>
					<div>
						<ProfileCard
							width={'200px'}
							image={team.head.image}
							name={team.head.name}
							designation={team.head.designation}
						/>
					</div>

					{team.coordinators.map((person, index) => {
						return (
							<div key={index}>
								<ProfileCard width={'200px'} image={person.image} name={person.name} designation={person.designation} />
							</div>
						);
					})}
					{team.members.map((person, index) => {
						return (
							<div key={index}>
								<ProfileCard width={'200px'} image={person.image} name={person.name} designation={person.designation} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
