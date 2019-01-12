import React from 'react';
import Header from './Header';
import GifList from './GifList';

const Main = props => {
	return (
		<div>
	    	<Header {...props} searchFormHandler={props.performSearch} />
	    	{(props.isLoading)
	    		? <p>Loading...</p>
	    		: <GifList data={props.gifsState} />}
	    </div>
    )
};

export default Main;