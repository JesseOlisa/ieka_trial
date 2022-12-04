import { useState } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './main_components/Footer';
import NavBar from './main_components/NavBar';
import SignIn from './main_components/Forms/SignIn';
import SignUp from './main_components/Forms/Signup';
import Aboutus from './Pages/Home/Aboutus';
import Categories from './Pages/Categories';
import Home from './Pages/Home/Home';

function App() {
	const location = useLocation();
	return (
		<div className='main--container'>
			{location.pathname === '/sign-in' ||
			location.pathname.includes("sign-up") ? null : (
				<NavBar />
			)}

			<Routes>
				<Route
					path='sign-in'
					element={<SignIn />}
				></Route>
				<Route
					path='sign-up'
					element={<SignUp />}
				></Route>
				<Route
					index
					element={<Home />}
				></Route>
				<Route
					path='/about-us'
					element={<Aboutus />}
				></Route>
				<Route
					path='/categories'
					element={<Categories />}
				></Route>
			</Routes>

			{location.pathname === '/sign-in' ||
			location.pathname.includes("sign-up") ? null : <Footer />}
		</div>
	);
}

export default App;
