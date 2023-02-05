import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardNavBar from '../../../components/DashboardNavBar';
import { CustomerSideBarLinks } from '../../../utils/data';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import Overview from '../../../Layouts/SharedLayout/Overview';
import Order from './Component/Order';
import Transactions from '../../../Layouts/SharedLayout/Transactions';
import Report from '../../../Layouts/SharedLayout/Report';

const CustomerDashboard = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className='flex bg-gray-100 text-gray-700 flex-col md:flex-row placeholder:h-screen transition-height duration-75 ease-out'>
			<DashboardLayout sidebarLinks={CustomerSideBarLinks} />
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
					<Route
						path='/order'
						element={<Order />}
					/>
					<Route
						path='/transactions'
						element={<Transactions />}
					/>
					<Route
						path='/reports'
						element={<Report />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default CustomerDashboard;
