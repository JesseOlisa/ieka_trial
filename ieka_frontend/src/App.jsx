import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Site/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import CustomerSignup from './auth/Customer/CustomerSignup';
import FarmerSignup from './auth/Farmer/FarmerSignup';
import { RequireAuth } from './components/RequireAuth';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import CustomerDashboard from './Pages/Dashboard/CustomerDashboard';
import CourierDashboard from './Pages/Dashboard/CourierDashboard';
import FarmerDashboard from './Pages/Dashboard/FarmerDashboard';
function App() {
	return (
		<div className='main--container'>
			<Routes>
				{/* AUTH PAGES */}
				<Route
					path='sign-in/'
					element={<SignIn />}
				></Route>
				<Route
					path='sign-up/*'
					element={<SignUp />}
				></Route>
				<Route
					path='/sign-up/customer-signup'
					element={<CustomerSignup />}
				></Route>
				<Route
					path='/sign-up/farmer-signup'
					element={<FarmerSignup />}
				></Route>

				{/* MAIN APP PAGES */}
				<Route
					path='/*'
					element={<Home />}
				></Route>
				{/* PROTECTED ROUTES */}
				<Route element={<RequireAuth allowedRoles={['admin']} />}>
					{/* <Route
						path='/dashboard/*'
						element={<Dashboard />}
					></Route> */}
					<Route
						path='/dashboard/admin'
						element={<AdminDashboard />}
					/>
				</Route>
				<Route element={<RequireAuth allowedRoles={['farmer']} />}>
					<Route
						path='/dashboard/farmer'
						element={<FarmerDashboard />}
					/>
				</Route>
				<Route element={<RequireAuth allowedRoles={['courier']} />}>
					<Route
						path='/dashboard/courier'
						element={<CourierDashboard />}
					/>
				</Route>
				<Route element={<RequireAuth allowedRoles={['customer']} />}>
					<Route
						path='/dashboard/customer'
						element={<CustomerDashboard />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
