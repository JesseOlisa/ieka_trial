import React from 'react';
import { Link } from 'react-router-dom';
import TransactionData from '../../components/TransactionData';

import moneySack from '../../assets/moneysack.png';
import check from '../../assets/check.png';

import { SampleTransactionsData } from '../../utils/data';

const Overview = () => {
	const recentTransactions = SampleTransactionsData.slice(0, 5);

	return (
		<section className=' flex flex-col gap-5 px-5 text-gray-800'>
			<section className='flex py-4 gap-5'>
				<div className='w-52 flex items-center flex-col gap-2 rounded-lg shadow-md bg-white hover:shadow-xl hover:-mt-1 px-4 py-3 transition-all duration-150 ease-in-out'>
					<h3 className='font-semibold text-sm'>Total Earnings</h3>
					<img
						src={moneySack}
						alt='sack with naria sign'
						className='w-16'
					/>
					<p className='text-2xl'>&#8358;50,000</p>
				</div>
				<div className='w-52 flex items-center flex-col gap-2 rounded-lg shadow-md bg-white hover:shadow-xl hover:-mt-1 px-4 py-3 transition-all duration-150 ease-in-out'>
					<h3 className='font-semibold text-sm'>Transactions Completed</h3>
					<img
						src={check}
						alt='complete'
						className='w-20'
					/>
					<p className='text-2xl'>24</p>
				</div>
			</section>
			<section className='w-full'>
				<h3 className='font-semibold text-xs'>Recent Tranaction</h3>
				<TransactionData transactions={recentTransactions} />
				<div className='w-full flex justify-center items-center mt-1'>
					<Link
						to='/dashboard/transactions'
						className='block text-sm font-semibold text-gray-400 underline-offset-4 mx-auto hover:underline hover:text-green-600 transition-all duration-150 ease-in-out'
					>
						See all transactions
					</Link>
				</div>
			</section>
		</section>
	);
};

export default Overview;
