import React from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

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
				<Link to='/'>your Places</Link>
			</h1>
			<nav>...</nav>
		</MainHeader>
	);
};

export default MainNavigation;