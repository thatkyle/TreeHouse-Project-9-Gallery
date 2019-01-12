import React from 'react';
import Header from './Header';
const NotFound = props => {
	return (
		<div>
			<Header {...props} searchFormHandler={props.performSearch} />
		    <h2>Page Not Found</h2>
		</div>
	);
};

export default NotFound;