import React from 'react';
import './stepper.css';

const Stepper = ({ step, stepProgress }) => {
	let width = ((step - 1) / (stepProgress.length - 1)) * 100;

	const displayProgress = stepProgress.map((data) => (
		<div
			key={data.id}
			className={`stepper--numbers flex ${data.active ? 'active' : ''}`}
			data-title={data.title}
		>
			{data.id}
		</div>
	));

	return (
		<div className='stepper--container'>
			<div
				className='progress'
				style={{ width: `${width}%` }}
			></div>
			<div>
				<div className='stepper-numbers--container flex'>
					{/* Display numbers */}
					{displayProgress}
				</div>
			</div>
		</div>
	);
};

export default Stepper;
