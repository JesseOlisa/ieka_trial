import React, { useState, useEffect } from 'react';
import TransactionData from '../../components/TransactionData';
import { SampleTransactionsData } from '../../utils/data';

const Transactions = () => {
	const [selected, setselected] = useState('all');
	const [displayedTransactions, setDisplayedTransactions] = useState(
		SampleTransactionsData
	);

	// EFFECT FOR UPDATING TABLE ARRARY
	useEffect(() => {
		if (selected !== 'all') {
			let newData = SampleTransactionsData.filter((data) => {
				return selected === data.status;
			});
			setDisplayedTransactions(newData);
		} else {
			setDisplayedTransactions(SampleTransactionsData);
		}
	}, [selected]);

	return (
		<section className='w-full px-5'>
			<h1 className='text-3xl text-gray-700 mb-2'>Transactions</h1>
			<div className='flex gap-3'>
				<span>Filter by:</span>
				<select
					value={selected}
					onChange={(e) => setselected(e.target.value)}
					className='bg-gray-200 p-1 shadow-md outline-green-500 py-2 px-4 transaction-select'
				>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='pending'>Pending</option>
				</select>
				Showing: All
			</div>
			<TransactionData transactions={displayedTransactions} />
		</section>
	);
};

export default Transactions;
