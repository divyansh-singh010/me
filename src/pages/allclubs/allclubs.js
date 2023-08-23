import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './allclubs.css';
import clubshome from '../../images/clubshome.png';
import { EnterCard } from '../../components/entercard/entercard';
import Title from '../../components/title/title';
import clubsData from '../../clubs.json';

// const baseURL = 'https://caic.iitd.ac.in/api/';
export const Allclubs = () => {
	// const [clubs, setClubs] = useState([]);
	//   useEffect(() => {
	//     axios.get("https://caic.iitd.ac.in/api/getclubs/").then((response) => {
	//       console.log("sending request")
	//       setClubs(response.data);
	//     });
	//   }, []);
	return (
		<div className='container-fluid rem-padding'>
			<Title title='CLUBS' image={clubshome} />

			{/* {console.log(clubs) } */}

			<div className='h-events clubs-page'>
				<div className='clubs-page'>
					<h2 className='e-head mt-4'>ALL CLUBS</h2>
					<div className='e-home clubs-card-g all-all flex-club-card'>
						{clubsData.map((club, id) => {
							return (
								<EnterCard
									key={id}
									type='club'
									link={club.info.link}
									name={club.info.name}
									logo={club.info.image}
									info={club.info.about}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};