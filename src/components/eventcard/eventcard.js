import React from 'react';
import './eventcard.css';
import club1 from '../../images/club1.png';
export const EventCard = (props) => {
	return (
		<div className='col-xl-4 col-lg-6 col-sm-6 e-card-main'>
			<div className='card event-card-1'>
				<img className='card-img-top' src={props.image} alt='' />
				<div className='card-body e-card-body'>
					<h5 className='card-title e-card-title'>{props.name}</h5>
					<p className='card-text'>{props.short_description}</p>
					<div className='e-btn-div'>
						<a href='google.com' className='btn e-btn go-btn'>
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;