import React from 'react';
import data from '../../utils/home_data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
// modules
import { Autoplay } from 'swiper';
import hero from '../../../public/ad_images/hero_1.jpg';

//styles
import 'swiper/css';
import './home.css';
const HomePage = () => {
	const ads = data.ads;
	const topProductsData = data.topProducts;
	const tuberProductsData = data.tubers;
	const vegetableProductsData = data.vegetables;
	const animalData = data.animals;

	// hero-section
	let adsImages = ads.map((ad, index) => {
		return (
			<SwiperSlide
				className='slides'
				key={index}
				style={{ backgroundImage: `url(${ad.image})` }}
			></SwiperSlide>
		);
	});

	const topProducts = topProductsData.map((product, index) => {
		return (
			<div
				className='product'
				key={index}
			>
				<img
					src={product.image}
					alt=''
				/>
				<p>{product.title}</p>
			</div>
		);
	});

	const vegetableProducts = vegetableProductsData.map((product, index) => {
		return (
			<div
				className='product'
				key={index}
			>
				<img
					src={product.image}
					alt=''
				/>
				<p>{product.title}</p>
			</div>
		);
	});

	const animals = animalData.map((product, index) => {
		return (
			<div
				className='product'
				key={index}
			>
				<img
					src={product.image}
					alt=''
				/>
				<p>{product.title}</p>
			</div>
		);
	});
	let tuberProducts = tuberProductsData.map((product, index) => {
		return (
			<div
				className='product'
				key={index}
			>
				<img
					src={product.image}
					alt=''
				/>
				<p>{product.title}</p>
			</div>
		);
	});

	return (
		<main className='main--container'>
			<section className='hero--section'>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className='slide--container'
				>
					{adsImages}
				</Swiper>
			</section>

			<section className='top-product--section'>
				<h2>Trending Products</h2>
				<div className='product--content flex'>
					<aside className='top--sidebar flex'>
						<div>
							<h3>Crops</h3>

							<div className='top--categories'>
								<ul>
									<li>
										<a href='#'>Cereals</a>
									</li>
									<li>
										<a href='#'>Pulses</a>
									</li>
									<li>
										<a href='#'>Oil and Oil seed</a>
									</li>
									<li>
										<a href='#'>Vegetables</a>
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h3>Animals</h3>

							<div className='top--categories'>
								<ul>
									<li>
										<a href='#'>Pets</a>
									</li>
									<li>
										<a href='#'>Diary</a>
									</li>
									<li>
										<a href='#'>Poultry</a>
									</li>
									<li>
										<a href='#'>Aquaculture</a>
									</li>
								</ul>
							</div>
						</div>
					</aside>

					<div className='products--container flex'>{topProducts}</div>
				</div>
			</section>

			<section className='products--section'>
				<div>
					<h2>Tubers</h2>
					<div className='products--container flex'>{tuberProducts}</div>
				</div>
				{/* veggies */}
				<div>
					<h2>Vegetable Products</h2>
					<div className='products--container flex'>{vegetableProducts}</div>
					{/* animals */}
				</div>
				<div>
					<h2>Animals</h2>
					<div className='products--container flex'>{animals}</div>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
