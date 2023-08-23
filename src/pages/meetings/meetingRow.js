import React from 'react';
function className(num) {
	if (num % 2) {
		return 'table-row-1';
	}
	return 'table-row-2';
}

function meetingRow(props) {
	return (
		<tr className={className(props.id)}>
			<td>{props.date}</td>
			<td>{props.type}</td>
			<td>{props.title}</td>
			<td>
				<a className='table-link' href={props.link}>
					Download
				</a>
			</td>
		</tr>
	);
}

export default meetingRow;
