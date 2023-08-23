import React from 'react';
function className(num) {
	if (num % 2) {
		return 'list-group-item recent-text';
	}
	return 'list-group-item recent-text list-group-item-secondary';
}

function newsRow(props) {
	return <li className={className(props.data.id)}>{props.data.title}</li>;
}

export default newsRow;
