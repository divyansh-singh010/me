import React from 'react';
import './allsociety.css';
import clubshome from '../../images/clubshome.png';
import Title from '../../components/title/title';
import { EnterCard } from '../../components/entercard/entercard';

import socsData from '../../societies.json';

export const Allsociety = () => {
	return (
		<div className='container-fluid rem-padding'>
			<Title title='SOCIETIES' image={clubshome} />
			<div className='h-events clubs-page'>
				<div className='clubs-page'>
					<h2 className='e-head h2 mt-4'>DEPARTMENTAL SOCIETIES</h2>
					<div className='row e-home clubs-card-g all-all'>
						{socsData.map((society, index) => {
							return (
								<EnterCard
									key={index}
									type='society'
									link={society.info.link}
									name={society.info.name}
									logo={society.info.image}
									info={society.info.about}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
