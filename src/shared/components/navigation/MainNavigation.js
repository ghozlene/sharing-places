import React from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import './MainNavigation.css';
const MainNavigation = () => {
	return (
		<MainHeader>
			<button className='main-navigation__menu-btn'>
				<span />
				<span />
				<span />
			</button>
			<h1 className='main-navigation__title'>
				<Link to='/'>yourPlaces</Link>
			</h1>
			<NavLinks />
		</MainHeader>
	);
};

export default MainNavigation;
