import React, { useState } from 'react';

const Report = () => {
	const [defaulter, setdefaulter] = useState(null);
	return (
		<section className='w-full px-4'>
			<div className='mx-auto my-2 max-w-fit text-center'>
				<h1 className='text-4xl text-green-600'>Report</h1>
				<p>Feeling any disservice from a farmer or us</p>
				<p>Please file a complaint</p>
			</div>
			<form className='flex flex-col gap-3 max-w-xl mx-auto bg-white px-2 py-4 rounded-xl shadow-md'>
				<label>
					<span className='font-semibold text-black text-base'>Title</span>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Title'
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span className='font-semibold text-sm'>
						Who is receiving this complaint?
					</span>
					<select
						name='defaulter'
						id='defaulter'
						value={defaulter}
						onChange={(e) => setdefaulter(e.target.value)}
						className='bg-gray-100 max-w-200 shadow-md outline-green-500 py-2 px-4 cursor-pointer'
					>
						<option
							selected
							disabled
						>
							Please Select
						</option>
						<option value='farmer'>Farmer</option>
						<option value='courier'>Courier</option>
					</select>
				</label>
				{defaulter === 'farmer' ? (
					<label>
						<span className='font-semibold text-black text-base'>
							Farmer ID
						</span>
						<input
							type='text'
							name='farmerId'
							id='farmerId'
							placeholder='Farmer Id'
						/>
					</label>
				) : defaulter === 'courier' ? (
					<label>
						<span className='font-semibold text-black text-base'>
							Tracking ID
						</span>
						<input
							type='text'
							name='TrackingId'
							id='TrackingId'
							placeholder='Tracking ID'
						/>
					</label>
				) : null}

				<label>
					<span className='font-semibold text-black text-base'>Complaint</span>
					<textarea
						name='complaint'
						id='complaint'
						placeholder='Share your experience'
					/>
				</label>
				<button className='px-2 py-3 text-white font-semibold rounded-lg outline-none bg-green-600 w-40 mx-auto'>
					File Complaint
				</button>
			</form>
		</section>
	);
};

export default Report;
