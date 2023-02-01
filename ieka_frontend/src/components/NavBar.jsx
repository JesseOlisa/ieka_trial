import React, { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';

import SignIn from '../auth/SignIn';

import './navbar.css';

const NavBar = () => {
	const [toggleNav, setToggleNav] = useState(false);

	function toggleNavbar() {
		setToggleNav((prevState) => !prevState);
	}

	return (
		<header className='flex'>
			<div className='icon--container'>
				<h2 className='icon'>ieka</h2>
			</div>
			<nav className='nav--container flex'>
				<NavLink
					to='/'
					// className='active'
				>
					Home
				</NavLink>
				<NavLink to='about-us'>About Us</NavLink>
				<NavLink to='categories'>Categories</NavLink>
				<NavLink to='sell'>Sell</NavLink>
				<NavLink to='customer service'>Customer Service</NavLink>
			</nav>
			<div className='flex sign-in--container'>
				<div className='search--container'>
					<BsSearch className='search-icon' />
				</div>
				<div className='btn--container'>
					<Link
						to='sign-in'
						className='btn'
					>
						Sign in
					</Link>
				</div>
			</div>
			<div
				className='hamburger'
				onClick={toggleNavbar}
			>
				{!toggleNav ? (
					<GiHamburgerMenu className='hamburger-icons' />
				) : (
					<TfiClose className='hamburger-icons close' />
				)}
			</div>
			{/* ROUTES TO SIGN IN */}
			<Routes>
				<Route
					path='/sign-in'
					element={<SignIn />}
				></Route>
			</Routes>
		</header>
	);
};

export default NavBar;
