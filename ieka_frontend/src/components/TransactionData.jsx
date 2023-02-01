import React from 'react';

const statusPendingStyle = 'text-yellow-800 bg-yellow-200';
const statusCancelledStyle = 'text-gray-800 bg-gray-200';
const statusCompletedStyle = 'text-green-800 bg-green-200';

const TransactionData = ({ transactions }) => {
	return (
		<>
			<div className='overflow-auto rounded-lg shadow hidden lg:block my-2'>
				<table className='w-full border-collapse'>
					<thead className='bg-gray-50 border-b-2 border-gray-300'>
						<tr>
							<th className='w-8 p-3 text-sm font-semibold tracking-wide text-left'>
								Id
							</th>
							<th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>
								Transaction Id
							</th>
							<th className='p-3 text-sm font-semibold tracking-wide text-left'>
								Transaction Reference
							</th>
							<th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>
								Farm Id
							</th>
							<th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>
								Customer Id
							</th>
							<th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>
								Status
							</th>
							<th className='p-3 text-sm font-semibold tracking-wide text-left'>
								Amount
							</th>
							<th className='w-40 p-3 text-sm font-semibold tracking-wide text-left'>
								Date
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100'>
						{transactions.map((transaction, idx) => {
							const statusStyle =
								transaction.status === 'pending'
									? statusPendingStyle
									: transaction.status === 'completed'
									? statusCompletedStyle
									: statusCancelledStyle;

							return (
								<tr
									key={idx}
									className='bg-white'
								>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{idx + 1}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{transaction.transactionId}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{transaction.transactionReference}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{transaction.farmId}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{transaction.customerId}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										<span
											className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${statusStyle}`}
										>
											{transaction.status}
										</span>
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										&#8358;{transaction.amount}
									</td>
									<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
										{transaction.date}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto my-2 lg:hidden'>
				{transactions.map((transaction, idx) => {
					const statusStyle =
						transaction.status === 'pending'
							? statusPendingStyle
							: transaction.status === 'completed'
							? statusCompletedStyle
							: statusCancelledStyle;
					return (
						<div
							key={idx}
							className='bg-white space-y-3 p-4 rounded-lg shadow'
						>
							<p>
								<span className='font-bold text-black mr-1'>Id:</span>
								{idx + 1}
							</p>
							<p>
								<span className='font-bold text-black mr-1'>Date:</span>
								{transaction.date}
							</p>
							<p>
								<span className='font-bold text-black mr-1'>Status:</span>
								<span
									className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${statusStyle}`}
								>
									{transaction.status}
								</span>
							</p>
							<p className='text-sm text-gray-700'>
								<span className='font-bold text-black mr-1'>Reference:</span>
								{transaction.transactionReference}
							</p>
							<p className='text-sm font-medium text-black mr-1'>
								<span className='font-bold text-black'>Amount:</span>
								&#8358;{transaction.amount}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TransactionData;
