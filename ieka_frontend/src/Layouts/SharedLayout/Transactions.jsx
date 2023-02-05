import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import TransactionData from '../../components/TransactionData';
import { SampleTransactionsData } from '../../utils/data';

const Transactions = () => {
	const [selected, setselected] = useState('all');
	const [transactionRecords, setTransactionRecords] = useState(
		SampleTransactionsData
	);
	const [currentPage, setCurrentPage] = useState(1);

	const recordsPerPage = 10;
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	const currentRecords = transactionRecords.slice(
		indexOfFirstRecord,
		indexOfLastRecord
	);
	const totalPagesNumber = Math.ceil(
		transactionRecords.length / recordsPerPage
	);

	// EFFECT FOR UPDATING TABLE ARRARY
	useEffect(() => {
		if (selected !== 'all') {
			let newData = SampleTransactionsData.filter((data) => {
				return selected === data.status;
			});
			setTransactionRecords(newData);
		} else {
			setTransactionRecords(SampleTransactionsData);
		}
	}, [selected]);

	return (
		<section className='w-full px-5'>
			<h1 className='text-3xl text-gray-700 mb-2'>Transactions</h1>
			<div className='flex gap-3 items-center'>
				<span>Filter by:</span>
				<select
					value={selected}
					onChange={(e) => setselected(e.target.value)}
					className='bg-gray-100 shadow-md outline-green-500 py-2 px-4 transaction-select'
				>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='pending'>Pending</option>
				</select>
			</div>
			<TransactionData transactions={currentRecords} />
			<div>
				<Pagination
					totalPages={totalPagesNumber}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					recordsPerPage={recordsPerPage}
					currentRecords={currentRecords}
				/>
			</div>
		</section>
	);
};

export default Transactions;
