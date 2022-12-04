import React from 'react';
import FarmerImg from '../../assets/happy-farmer.jpg';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import './aboutus.css';

const Aboutus = () => {
	return (
		<div className='container'>
			<section class='intro--container flex'>
				<div className='statement--container'>
					<h2>Welcome to Ieka</h2>
					<p>
						we are a company that provides a network for sale and distribution
						of agricultural products, either crops or animals. We have a virtual
						agricultural market, that is same to the physical market,
						characteristic of the bargaining and pricing between customers and
						sellers. Prospective customers reach out to the dealer on the
						product they want to buy and discuss the price and quantity. Once
						the parties agree, our system ensures the payments made by the
						customer get to the dealer, after getting our 10% share
					</p>
				</div>
			</section>

			{/* <!--mission and vision--> */}
			<section class='mission-and-vision'>
				{/* <!--mission--> */}
				<div className='mission--container flex'>
					<div className='text--container'>
						<h2>Our mission</h2>
						<p>
							<q>
								We intend to stop farmers from looking for display stores or
								warehouses or having to go the markets with their crops or
								animals. Farmers should just worry about their farms and storage
								houses.
							</q>
						</p>
					</div>
					<div className='image--container'>
						<img
							src={FarmerImg}
							alt='happy-farmer'
						/>
					</div>
				</div>
				{/* <!--vision--> */}
				<div className='vision--container flex'>
					<div className='text--container'>
						<h2>Our visions</h2>
						<ol>
							<li>Recreate the physical agric market online</li>
							<li>Reduce concerns of farmers over poor road network</li>
							<li>Promote greater participation in agriculture</li>
						</ol>
					</div>

					<div className='join-us flex'>
						<p>Click the button to join us at IEKA</p>
						<button className='btn flex'>
							Join us
							<HiOutlineArrowNarrowRight size={15} />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Aboutus;
