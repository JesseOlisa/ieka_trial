import React, { useState } from 'react';
import Personal from './Personal';
import AccountInfo from './AccountInfo';
import BusinessInfo from './BusinessInfo';
import Stepper from './Stepper'
const FarmerSignup = () => {
	const stepProgress = [
		{
			id: 1,
			title: 'Biodata',
			active: true,
		},
		{
			id: 2,
			title: 'Address',
			active: false
		},
		{
			id: 3,
			title: 'Business',
			active: false
		}
	]

	const [step, setStep] = useState(1);
	const [progressInfo, setProgressInfo] = useState(stepProgress);


	const currentStep = () => {

		switch (step) {
			case 1:
				return <Personal />;
				break;
			case 2:
				return <AccountInfo />;
				break;
			case 3:
				return <BusinessInfo />;
				break;
			default:
				break;
		}
	};

	//FUNCTIONS

	//onClick event for next
	const btnNext = () => {
		setStep(prev => prev  + 1)
		updateProgress(step)
		
	}
	//onclick event for prev
	const btnBack = () => {
		setStep(prev => prev - 1)
		updateProgress(step - 1)
	}

	// this updates the numbers when active
	const updateProgress = (index) => {
		let newprogress = JSON.parse(JSON.stringify(progressInfo));
			newprogress[index].active = !newprogress[index].active;
			setProgressInfo(newprogress);
	}

	return (
		<div className='auth--container flex-col'>
			<form className='form--control'>
				<p className='error'></p>
				<Stepper step={step} stepProgress={progressInfo} />
				<div className='sections'>{currentStep()}</div>
				
				<div className='stepper--controls flex'>
					<button 
						className={`btn btn-color ${step == 1 ? 'btn-disable' : ''}`}
						onClick={() => btnBack()}
					>Back</button>
					
					{step === stepProgress.length ? (
						<input
							type='submit'
							name='submit'
							value='submit'
							className='btn btn-color'
						/>
					) : (
						<button 
							className='btn btn-color' 
							onClick={() => btnNext()}
						>
						Next
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default FarmerSignup;
