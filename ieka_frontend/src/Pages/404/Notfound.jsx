import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
	return (
		<div className='flex flex-col gap-5 w-full h-screen bg-gray-200 justify-center items-center absolute top-0 left-0 right-0 bottom-0'>
			<h1 className='text-5xl font-semibold'>Page Not found!</h1>

			<Link
				to='/'
				className='block border-2 text-black border-black rounded-lg px-3 py-2 text-2xl hover:border-none hover:bg-green-500 hover:text-white'
			>
				Go Home
			</Link>
		</div>
	);
};

export default Notfound;
