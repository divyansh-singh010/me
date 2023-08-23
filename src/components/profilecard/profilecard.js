import React from 'react';
import './profilecard.css';
// import Photo from './../../images/portrait.jpeg';

export default function ProfileCard(props) {
	return (
		<div className={props.class}>
			<div style={{ width: props.width, paddingBottom: `calc(0.03*${props.width})` }} className='profile-card'>
				<img style={{ height: props.width }} className='avatar' src={props.image} alt='portrait' />
				<div
					style={{ fontSize: `calc(0.1*${props.width})`, marginTop: `calc(0.05*${props.width})`, textAlign: 'center' }}
					className='name'
				>
					{props.name}
				</div>
				<div
					style={{
						fontSize: `calc(0.08*${props.width})`,
						marginTop: `calc(0.03*${props.width})`,
						marginBottom: `calc(0.05*${props.width})`,
					}}
					className='position'
				>
					{props.designation}
				</div>
				<div
					style={{ width: `calc(0.2*${props.width})`, marginBottom: `calc(0.05*${props.width})` }}
					className='bar'
				></div>
				<div className='row'>
					<div className='col'>
						<a href={`mailto:${props.email}`} target='_blank'>
							<svg width='25' height='25' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<mask
									id='mask0_31_329'
									style={{ maskType: 'alpha' }}
									maskUnits='userSpaceOnUse'
									x='0'
									y='0'
									width='30'
									height='30'
								>
									<rect width='30' height='30' fill='#000' />
								</mask>
								<g mask='url(#mask0_31_329)'>
									<path
										d='M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.745 23.7763 2.5 23.1875 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.72417 5.245 4.3125 5 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2554 6.22417 27.5 6.8125 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2763 24.7554 25.6875 25 25 25H5ZM25 10L15.6562 15.8438C15.5521 15.9062 15.4425 15.9529 15.3275 15.9837C15.2133 16.0154 15.1042 16.0312 15 16.0312C14.8958 16.0312 14.7867 16.0154 14.6725 15.9837C14.5575 15.9529 14.4479 15.9062 14.3438 15.8438L5 10V22.5H25V10ZM15 13.75L25 7.5H5L15 13.75ZM5 10.3125V8.46875V8.5V8.48375V10.3125Z'
										fill='black'
										fillOpacity='0.9'
									/>
								</g>
							</svg>
						</a>
					</div>
					<div className='col'>
						<a href={props.instagram} target='_blank'>
							<svg width='25' height='25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 8a6 6 0 110 12 6 6 0 010-12zm9 2a1 1 0 110 2 1 1 0 010-2zm-5.715 4.287a4.574 4.574 0 00-4.567 4.567 4.574 4.574 0 004.567 4.566 4.574 4.574 0 004.567-4.566 4.574 4.574 0 00-4.567-4.567zm0 7a2.432 2.432 0 110-4.864 2.432 2.432 0 010 4.864zm-7.183-9.518a1.424 1.424 0 110 2.848 1.424 1.424 0 010-2.848z'
									fill='black'
								/>
							</svg>
						</a>
					</div>
					<div className='col'>
						<a href={props.linkedin} target='_blank'>
							<svg width='25' height='25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M1.66699 4.73009C1.66699 3.91764 1.98974 3.13847 2.56422 2.56398C3.13871 1.9895 3.91788 1.66675 4.73033 1.66675H35.267C35.6696 1.66609 36.0684 1.74486 36.4406 1.89853C36.8127 2.0522 37.1509 2.27777 37.4357 2.56231C37.7206 2.84686 37.9465 3.18479 38.1006 3.55677C38.2547 3.92875 38.3339 4.32746 38.3337 4.73009V35.2668C38.3341 35.6695 38.2551 36.0683 38.1013 36.4405C37.9474 36.8126 37.7217 37.1508 37.437 37.4356C37.1524 37.7204 36.8143 37.9463 36.4422 38.1004C36.0702 38.2545 35.6714 38.3336 35.2687 38.3334H4.73033C4.3279 38.3334 3.92942 38.2541 3.55765 38.1001C3.18588 37.946 2.84811 37.7202 2.56363 37.4356C2.27915 37.151 2.05355 36.8131 1.8997 36.4412C1.74585 36.0694 1.66677 35.6708 1.66699 35.2684V4.73009ZM16.1803 15.6468H21.1453V18.1401C21.862 16.7068 23.6953 15.4168 26.4503 15.4168C31.732 15.4168 32.9837 18.2718 32.9837 23.5101V33.2134H27.6387V24.7034C27.6387 21.7201 26.922 20.0368 25.102 20.0368C22.577 20.0368 21.527 21.8518 21.527 24.7034V33.2134H16.1803V15.6468ZM7.01366 32.9851H12.3603V15.4168H7.01366V32.9834V32.9851ZM13.1253 9.68675C13.1354 10.1445 13.0539 10.5997 12.8857 11.0256C12.7175 11.4515 12.4659 11.8395 12.1457 12.1668C11.8255 12.4941 11.4432 12.7542 11.0211 12.9318C10.599 13.1093 10.1457 13.2008 9.68783 13.2008C9.22993 13.2008 8.77664 13.1093 8.35457 12.9318C7.9325 12.7542 7.55014 12.4941 7.22994 12.1668C6.90974 11.8395 6.65815 11.4515 6.48993 11.0256C6.32171 10.5997 6.24025 10.1445 6.25033 9.68675C6.27011 8.78818 6.64097 7.93307 7.28347 7.30456C7.92597 6.67605 8.78903 6.32412 9.68783 6.32412C10.5866 6.32412 11.4497 6.67605 12.0922 7.30456C12.7347 7.93307 13.1055 8.78818 13.1253 9.68675Z'
									fill='black'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}