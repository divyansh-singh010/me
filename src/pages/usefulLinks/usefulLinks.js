import React from 'react';
import './usefulLinks.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title';

export const UsefulLinks = () => {
	return (
		<div>
			<Title title='USEFUL LINKS' image={defBack} />
			<div className='container'>
				<div id='links' className='row'>
					<div className='col-12'>
						<ul>
							<a href='http://notices.smartcampus.iitd.ac.in/' target='_blank'>
								<li>Online UG Notice Board</li>
							</a>
							<a href='https://ocs.iitd.ac.in/' target='_blank'>
								<li>Office of Career Services</li>
							</a>
							<a href='https://timetable.iitd.ac.in/' target='_blank'>
								<li>Time Table</li>
							</a>
							<a href='http://academics.iitd.ac.in/' target='_blank'>
								<li>Dean of Academics</li>
							</a>
							<a href='https://dos.iitd.ac.in/' target='_blank'>
								<li>Dean of Student Affairs</li>
							</a>
							<a href='http://infra.iitd.ac.in/' target='_blank'>
								<li>Dean of Infrastructure</li>
							</a>
							<a href='https://ird.iitd.ac.in/' target='_blank'>
								<li>Dean of Research & Development</li>
							</a>
							<a href='https://alumni.iitd.ac.in/' target='_blank'>
								<li>Dean of Alumini Affairs & International Programs</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
