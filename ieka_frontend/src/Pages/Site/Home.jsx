import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, AboutUs, Categories } from './index';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Home = () => {
	return (
		<div className='main--container'>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				></Route>
				<Route
					path='/about-us'
					element={<AboutUs />}
				></Route>
				<Route
					path='/categories'
					element={<Categories />}
				></Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default Home;
