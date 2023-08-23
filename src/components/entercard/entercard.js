import React from 'react';
import './entercard.css';
import { Link } from 'react-router-dom';
export const EnterCard = (props) => {
	return (
		<div className='col-xl-4 col-lg-6 col-sm-6 e-card-main'>
			<Link to={`/${props.type}/${props.link}`}>
				<div className='card '>
					<img className='card-img-top' src={props.logo} alt='' />
					<div className='card-body e-card-body'>
						<h5 className='card-title e-card-title'>{props.name}</h5>
						<p className='card-text'>{props.info.slice(0, 200) + '...'}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};