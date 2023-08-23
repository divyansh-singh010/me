import React from 'react';
import './acadResources.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title';

export const AcadResources = () => {
	return (
		<div className='acad-main'>
			<Title title='ACADEMIC RESOURCES' image={defBack} />
			<div className='acad-page'>
				<div className='content-main'>
					<div className='content-title'>COURSES OF STUDY</div>
					<div className='content-text'>
						TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the
						student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through
						workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights,
						from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+
						events and participation of 40,000 students from all over the nation, team TRYST ensures there is something
						fun for everyone. Come aboard and have an experience of a lifetime!
					</div>
					<div className='year-links'>
						<div>
							<a href='#'>2017-2018</a>
						</div>
						<div>
							<a href='#'>2018-2019</a>
						</div>
						<div>
							<a href='#'>2019-2020</a>
						</div>
						<div>
							<a href='#'>2020-2021</a>
						</div>
					</div>
				</div>
				<div className='content-main'>
					<div className='content-title'>COURSES OF STUDY</div>
					<div className='content-text'>
						TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the
						student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through
						workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights,
						from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+
						events and participation of 40,000 students from all over the nation, team TRYST ensures there is something
						fun for everyone. Come aboard and have an experience of a lifetime!
					</div>
					<div className='year-links'>
						<div>
							<a href='#'>2017-2018</a>
						</div>
						<div>
							<a href='#'>2018-2019</a>
						</div>
						<div>
							<a href='#'>2019-2020</a>
						</div>
						<div>
							<a href='#'>2020-2021</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
