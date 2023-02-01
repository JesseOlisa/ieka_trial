import React, { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';

import SignIn from '../auth/SignIn';

import './navbar.css';

const NavBar = () => {
	const [toggleNav, setToggleNav] = useState(false);
	const [showSignInOptions, setShowSignInOptions] = useState(false);

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
				<div className='btn--container relative'>
					<button
						type='button'
						className='bg-white rounded-lg px-3 p-2'
						onFocus={() => setShowSignInOptions(true)}
						// onBlur={() => setShowSignInOptions(false)}
					>
						Sign in
					</button>
					{showSignInOptions && (
						<div className='absolute bg-white flex flex-col gap-3 text-base z-10 px-3 py-2 border-green-500 border top-10 -left-2'>
							<Link
								to='/dashboard/customer'
								className='text-gray-700 hover:font-semibold transition-all duration-150'
							>
								Customer
							</Link>
							<Link
								to='/dashboard/farmer'
								className='text-gray-700 hover:font-semibold transition-all duration-150'
							>
								Farmer
							</Link>
							{/* <a
								href='http://www.google.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								Google
							</a> */}
						</div>
					)}
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
