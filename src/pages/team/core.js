import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './team.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title';
import { Link } from 'react-router-dom';

import ProfileCard from '../../components/profilecard/profilecard';
import { API_BASE } from '../../constants';


export const Core = () => {
	const [team, setTeam] = useState({ members: [] });
	useEffect(() => {
		axios.get(`${API_BASE}/core/`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	const pf=team.head
	const Profile=(pf)=>{
		<ProfileCard
    width={pf.designation === "General Secretary" ? '210px' : '180px'}
    designation={team.head.designation}
    name={team.head.name}
    image={team.head.image}
    email={team.head.email}
    instagram={team.head.instagram}
    linkedin={team.head.linkedin}
/>	}
	return (
		<div className='team-main'>
			<Title title='CORE TEAM' image={defBack} />
			{team.head ? (
				<div className='cards'>
					<Profile/>
				</div>
			) : (
				''
			)}
			<div className='container team-link'>
				<ul>
					<li className='list'>
						<Link to='/team/ugconvenor' className='team-link'>UG Convenors</Link>
					</li>
					<li className='list'>
						<Link to='/team/pgconvenor' className='team-link'>PG Convenors</Link>
					</li>
					<li className='list'>
						<Link to='/team/clubocs' className='team-link'>Technical Club Overall Co-ordinator</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
