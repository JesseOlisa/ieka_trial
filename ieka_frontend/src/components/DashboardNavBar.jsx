import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineCaretDown } from 'react-icons/ai';

const DashboardNavBar = ({ searchTerm, setSearchTerm }) => {
	const [showOptions, setShowOptions] = useState(false);

	const handleShowOptions = () => {
		setShowOptions((prevState) => !prevState);
	};
	return (
		<div className=' flex gap-2 justify-between items-center md:gap-5 w-full mt-5 pb-5 px-4'>
			<div className='relative flex md:max-w-lg justify-start items-start w-full px-2 rounded-lg border-none outline-none focus-within:shadow-sm'>
				<IoMdSearch
					fontSize={18}
					className='ml-2 absolute top-1/2 -translate-y-1/2 text-gray-500'
				/>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Search'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='pl-7'
				/>
			</div>
			<div className='text-gray-500 relative hidden md:block'>
				<button
					type='button'
					onClick={handleShowOptions}
					className='flex gap-2 text-gray-700 items-center rounded-lg p-1 transition-shadow duration-100 ease-in-out hover:shadow-md'
				>
					<img
						src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						alt='profile-pic'
						className='w-12 h-12 rounded-full object-cover'
					/>
					<h4>John</h4>
					<AiOutlineCaretDown />
				</button>
				{showOptions && (
					<div className='border-green-200 border absolute top-10 w-full bg-white rounded-md px-3 py-2 shadow-sm'>
						<Link
							className='text-gray-500 mb-5'
							to='/dashboard/settings'
						>
							Profile
						</Link>
						<button type='button'>Logout</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default DashboardNavBar;
