import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const activeStyle =
	'bg-green-200 font-semibold transition-all duration-200 ease-in-out';
const notActiveStyle =
	'hover:bg-gray-200 transition-all duration-200 ease-in-out';

const Pagination = (props) => {
	let {
		totalPages,
		currentPage,
		setCurrentPage,
		recordsPerPage,
		currentRecords,
	} = props;

	const pageNumbers = [...Array(totalPages).keys()];

	let recordGroup = currentRecords.length;
	let totalRecords = recordsPerPage * totalPages;

	const nextPage = () => {
		if (currentPage !== totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className='flex flex-col gap-3'>
			<p className='current-page-info'>
				Showing {recordGroup} of {totalRecords}
			</p>
			<ul className='max-w-fit flex justify-start items-center border border-green-700 rounded-sm'>
				<li>
					<button
						type='button'
						className='px-1'
						onClick={previousPage}
					>
						<BsChevronLeft />
					</button>
				</li>
				{pageNumbers.map((pageNumber) => {
					return (
						<li
							key={pageNumber}
							className={
								pageNumber + 1 === currentPage ? activeStyle : notActiveStyle
							}
						>
							<button
								type='button'
								className='border-l border-green-700 px-3 text-center'
								onClick={() => setCurrentPage(pageNumber + 1)}
							>
								{pageNumber + 1}
							</button>
						</li>
					);
				})}
				<li className='border-l border-green-700 p-1'>
					<button
						type='button'
						onClick={nextPage}
					>
						<BsChevronRight />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
