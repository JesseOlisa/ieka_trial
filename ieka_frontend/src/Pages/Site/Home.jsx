import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, AboutUs, Categories } from './index';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Notfound from '../404/Notfound';

const Home = () => {
	return (
		<div className='main--container relative'>
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
				<Route
					path='*'
					element={<Notfound />}
				/>
			</Routes>
			<Footer />
			<section>
				<Routes></Routes>
			</section>
		</div>
	);
};

export default Home;
