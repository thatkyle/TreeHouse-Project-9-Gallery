import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
	handleClick = e => {
		this.props.history.replace('');
    	this.props.history.push(`/search/${e.target.textContent}`);
		this.props.onSearch(e.target.textContent);
	}

	render() {
		return (
			<div>
			  <ul>
			    <li><NavLink to={`/search/cats`}><button onClick={this.handleClick}>Cats</button></NavLink></li>
			    <li><NavLink to={`/search/puppies`}><button onClick={this.handleClick}>Puppies</button></NavLink></li>
			    <li><NavLink to={`/search/kittens`}><button onClick={this.handleClick}>Kittens</button></NavLink></li>
			  </ul>
			</div>
		)
	}
};