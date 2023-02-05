import React, { useState } from 'react';

const Report = () => {
	const [defaulter, setdefaulter] = useState(null);
	const [title, setTitle] = useState(null);
	const [idNumber, setIdNumber] = useState(null);
	const [complaint, setComplaint] = useState(null);
	const [success, setSuccess] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		const reportInfo = {
			title,
			defaulter,
			idNumber,
			complaint,
		};
		console.log(reportInfo);
		setSuccess(true);
		setComplaint(null);
		setIdNumber(null);
		setTitle(null);
		setdefaulter(null);

		setTimeout(() => {
			setSuccess(false);
		}, 1500);
	};

	return (
		<section className='w-full px-4'>
			<div className='mx-auto my-2 max-w-fit text-center'>
				<h1 className='text-4xl text-green-600'>Report</h1>
				<p>Feeling any disservice from a farmer or us</p>
				<p>Please file a complaint</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-3 max-w-xl mx-auto bg-white px-2 py-4 rounded-xl shadow-md'
			>
				<label>
					<span className='font-semibold text-black text-base'>Title</span>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Title'
						value={title}
						onChange={() => setTitle(e.value.target)}
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
							value={idNumber}
							onChange={() => setIdNumber(e.value.target)}
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
							value={idNumber}
							onChange={() => setIdNumber(e.value.target)}
						/>
					</label>
				) : null}

				<label>
					<span className='font-semibold text-black text-base'>Complaint</span>
					<textarea
						name='complaint'
						id='complaint'
						placeholder='Share your experience'
						value={complaint}
						onChange={(e) => setComplaint(e.target.value)}
					/>
				</label>
				<button className='px-2 py-3 text-white font-semibold rounded-lg outline-none bg-green-600 w-40 mx-auto'>
					File Complaint
				</button>
			</form>

			{success && (
				<div className='absolute flex items-center justify-center bg-blackOverlay w-full h-screen top-0 left-0'>
					<div className='bg-white rounded-lg px-4 py-5 text-center'>
						<h2 className='text-black font-semibold '>
							Compliant filed Successfully
						</h2>
						<p className='text-sm'>
							We will look into this as quick as possible
						</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default Report;
