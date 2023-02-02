import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Site/Home';
// import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import CustomerSignup from './auth/Customer/CustomerSignup';
import FarmerSignup from './auth/Farmer/FarmerSignup';
import { RequireAuth } from './components/RequireAuth';
// import DashboardRoutes from './routes/DashboardRoutes';
import {
	AdminDashboard,
	CustomerDashboard,
	CourierDashboard,
	FarmerDashboard,
} from './Pages/Dashboard/index';
import Notfound from './Pages/404/Notfound';

function App() {
	return (
		<div className='main--container'>
			<Routes>
				{/* AUTH PAGES */}
				<Route
					path='sign-in/'
					element={<SignIn />}
				/>
				<Route
					path='sign-up/*'
					element={<SignUp />}
				/>
				<Route
					path='/sign-up/customer-signup'
					element={<CustomerSignup />}
				/>
				<Route
					path='/sign-up/farmer-signup'
					element={<FarmerSignup />}
				/>

				{/* MAIN APP PAGES */}
				<Route
					path='/*'
					element={<Home />}
					errorElement={<Notfound />}
				/>

				{/* DASHBOARD ROUTES */}

				{/* ADMIN */}
				<Route element={<RequireAuth allowedRoles={['admin']} />}>
					<Route
						path='/dashboard/admin/*'
						element={<AdminDashboard />}
					/>
				</Route>

				{/* FARMER */}
				<Route element={<RequireAuth allowedRoles={['farmer']} />}>
					<Route
						path='/dashboard/farmer/*'
						element={<FarmerDashboard />}
					/>
				</Route>

				{/* COURIER */}
				<Route element={<RequireAuth allowedRoles={['courier']} />}>
					<Route
						path='/dashboard/courier/*'
						element={<CourierDashboard />}
					/>
				</Route>
				{/* CUSTOMER */}
				<Route element={<RequireAuth allowedRoles={['customer']} />}>
					<Route
						path='/dashboard/customer/*'
						element={<CustomerDashboard />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
