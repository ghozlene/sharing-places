import React, { useState } from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';
import Backdrop from '../UIElement/BackDrop';
const MainNavigation = () => {
	const [drawerIsopen, setDrawerIsOpen] = useState();

	const openDrawer = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawer = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			{drawerIsopen && <Backdrop onClick={closeDrawer} />}
			{drawerIsopen && (
				<SideDrawer>
					<nav className='main-navigation__drawer-nav'>
						<NavLinks />
					</nav>
				</SideDrawer>
			)}

			<MainHeader>
				<button className='main-navigation__menu-btn' onClick={openDrawer}>
					<span />
					<span />
					<span />
				</button>
				<h1 className='main-navigation__title'>
					<Link to='/'>your Places</Link>
				</h1>
				<nav className='main-navigation__header-nav'>
					<NavLinks />
				</nav>
			</MainHeader>
		</>
	);
};

export default MainNavigation;
