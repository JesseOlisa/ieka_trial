import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardNavBar from '../../../components/DashboardNavBar';
import { CourierSideBarLinks } from '../../../utils/data';
import DashboardLayout from '../../../Layouts/DashboardLayout';

const CourierDashboard = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className='flex bg-gray-100 flex-col md:flex-row placeholder:h-screen transition-height duration-75 ease-out'>
			<DashboardLayout sidebarLinks={CourierSideBarLinks} />
			<div className='pb-2 flex-1 h-screen overflow-y-scroll hide-scrollbar'>
				<DashboardNavBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				{/* <Routes>
					<Route
						path='/'
						element={<Overview />}
					></Route>
				</Routes> */}
			</div>
		</div>
	);
};

export default CourierDashboard;
