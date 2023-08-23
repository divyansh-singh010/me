import React from 'react';
import './title.css';

/******* pass title and image as given in src/pages/meetings/meetings.js */
function Title(props) {
	return (
		<React.Fragment>
			<div
				className='background-title'
				style={{ backgroundImage: 'url(' + props.image + ')', backgroundSize: 'cover' }}
			>
				<div className='text-div-title'>{props.title}</div>
			</div>
		</React.Fragment>
	);
}
export default Title;