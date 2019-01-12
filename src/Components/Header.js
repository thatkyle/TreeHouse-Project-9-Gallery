import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = props => {

  return(
  	<div className="header-wrapper">
	    <div className="main-header">
	      <div className="inner">
	        <h1 className="main-title">GifSearch</h1>
	        <SearchForm {...props} onSearch={props.searchFormHandler}/>
	      </div>
	    </div>
	    <Nav {...props} onSearch={props.searchFormHandler}/>
	</div>
  );
}

export default Header;
