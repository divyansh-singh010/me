import React from 'react';
import './tryst.css';
import tryst from '../../images/tryst.png';
import trystLogo from '../../images/tryst-logo.png';
import trystbg from '../../images/tryst-bg.png';
import Title from '../../components/title/title';
export const Tryst = () => {
	return (
		<div className='container-fluid rem-padding'>
			<Title title='TRYST' image={tryst} />
			<div className='main-page' style={{ backgroundImage: `url(${trystbg})` }}>
				<div className='tryst-text'>
					<h2 className='tryst-head'>TRYST - Annual Tech-Fest of IITD</h2>
					<p className='about'>
						TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the
						student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through
						workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights,
						from meeting eminent personalities to discovering science as never seen before, TRYST has it all.
						<br />
						<br />
						With 75+ events and participation of 40,000 students from all over the nation, team TRYST ensures there is
						something fun for everyone. Come aboard and have an experience of a lifetime!.
						<br />
						<br />
						Click the links below to explore the current tryst website and social media!
					</p>
					<span className='tryst-btn'>
						<a href='https://www.tryst-iitd.org' target='_blank' rel='noreferrer'>
							<span className='tryst-btn'>Visit Website</span>
						</a>
					</span>
				</div>
				<div className='tryst-image'>
					<img className='tryst-logo' src={trystLogo} alt=''></img>
					<p className='follow'>Follow US!</p>
					<div className='handles'>
						<div className='handle'>
							<a href='https://www.instagram.com/tryst.iitd/'>
								<i className='fa-brands fa-instagram'></i>
							</a>
						</div>
						<div className='handle'>
							<a href='https://www.facebook.com/IITD.Tryst/'>
								<i className='fa-brands fa-facebook'></i>
							</a>
						</div>
						<div className='handle'>
							<a href='https://www.linkedin.com/company/tryst-iit-delhi/?originalSubdomain=in'>
								<i className='fa-brands fa-linkedin'></i>
							</a>
						</div>
						<div className='handle'>
							<a href='https://www.youtube.com/channel/UClFEnH3ydeP1QUNeI0IHC3g'>
								<i className='fa-brands fa-youtube'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
