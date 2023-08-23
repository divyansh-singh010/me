import React from 'react';
import './oneSociety.css';

import About from '../../images/about.png';
import Club1 from '../../images/club1.png';
import Society from '../../images/clubshome.png';

import EventCard from '../../components/eventcard/eventcard';
import ProfileCard from '../../components/profilecard/profilecard';

import Title from '../../components/title/title';

export const OneSociety = () => {
	return (
		<div id='society' className='red-bor'>
			<Title title='MATHEMATICS SOCIETY' image={Society} />
			<div id='about' className='container green-bor'>
				<div className='row'>
					<div className='col-md-6 blue-bor'>
						<h3>ABOUT US</h3>
						<p>
							The Co-curricular and Academic Interaction Council (CAIC) and its constituent bodies aim at maximal
							interaction between students and faculty, a good academic atmosphere and an efficient decision making
							process based on consultation; and through these it aims to promote an overall development of students for
							the maximum realization of their potential.
						</p>
						<p>
							The Co-curricular and Academic Interaction Council (CAIC) and its constituent bodies aim at maximal
							interaction between students and faculty, a good academic atmosphere and an efficient decision making
							process based on consultation; and through these it aims to promote an overall development of students for
							the maximum realization of their potential.
						</p>
						<p>
							The Co-curricular and Academic Interaction Council (CAIC) and its constituent bodies aim at maximal
							interaction between students and faculty, a good academic atmosphere and an efficient decision making
							process based on consultation; and through these it aims to promote an overall development of students for
							the maximum realization of their potential.
						</p>
						{/* <button>Learn More</button> */}
					</div>
					<div className='col-md-6 blue-bor d-flex align-items-center justify-content-center'>
						<img src={About} alt='' />
					</div>
				</div>
			</div>

			<div id='long_poster' className='green-bor'>
				<div id='galler' className='project'>
					<div className='container green-bor'>
						<div className='row'>
							<h3>
								PROJECT <span>SHOWCASE</span>
							</h3>
							<EventCard />
							<EventCard />
							<EventCard />
						</div>
					</div>
				</div>

				<div id='cc'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<h3>CONSTITUTION</h3>
								<div className='blank1'></div>
							</div>
							<div className='col-md-6'>
								<h3>CALENDAR</h3>
								<div className='blank2'></div>
							</div>
						</div>
					</div>
				</div>

				<div id='galler'>
					<div className='container green-bor'>
						<div className='row'>
							<h3>
								PHOTO <span>GALLERY</span>
							</h3>
						</div>
					</div>

					<div className='container p-0'>
						<div className='row'>
							<div className='col-md-6 black-bor p-0 d-flex justify-content-center'>
								<img src={Club1} alt='' />
							</div>
							<div className='col-md-6 black-bor p-0 d-flex justify-content-center'>
								<img src={Club1} className='img-fluid' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id='team-sudha' className='container'>
				<div className='row'>
					<h3>TEAM</h3>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
					<div className='col-md-3 team-card'>
						<ProfileCard />
					</div>
				</div>
			</div>
		</div>
	);
};
