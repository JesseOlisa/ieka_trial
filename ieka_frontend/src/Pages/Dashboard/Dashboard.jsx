import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Sidebar from '../../components/Sidebar';
import DashboardNavBar from '../../components/DashboardNavBar';

const Dashboard = () => {
	const [openNav, setOpenNav] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const handleCloseSidebar = () => {
		if (openNav) setOpenNav(false);
	};

	return (
		<div className='flex bg-gray-100 flex-col md:flex-row placeholder:h-screen transition-height duration-75 ease-out'>
			{/* DESKTOP SIDEBAR */}
			<div className='hidden md:flex h-screen flex-initial'>
				<Sidebar />
			</div>
			{/* MOBILE SIDEBAR */}
			<div className='flex md:hidden w-full'>
				<header className='p-2 flex w-full justify-between items-center shadow-md bg-gray-50'>
					<div
						className='menu--container flex z-20'
						onClick={() => setOpenNav((prevState) => !prevState)}
					>
						<div
							role='button'
							className={`menu--btn ${openNav ? 'open' : ''}`}
						></div>
					</div>
					<Link to='/'>
						<h1 className='text-3xl font-extrabold text-green-800'>ieka</h1>
					</Link>
					<Link to='/userprofile'>
						<img
							src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
							alt='profile-pic'
							className='w-14 h-14 rounded-full object-cover'
						/>
					</Link>
				</header>
				{openNav && (
					<section className='fixed w-3/5 h-screen bg-white top-0 left-0 overflow-y-auto shadow-md z-10 animate-slide-in pt-12'>
						<Sidebar closeSidebar={handleCloseSidebar} />
					</section>
				)}
			</div>
			<div className='pb-2 flex-1 h-screen overflow-y-scroll hide-scrollbar'>
				<DashboardNavBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<Routes>
					<Route
						path='/'
						element={<Overview />}
					></Route>
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
