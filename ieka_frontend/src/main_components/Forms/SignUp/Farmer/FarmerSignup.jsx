import React, { useState, useReducer} from 'react';
import Personal from './Personal';
import AccountInfo from './AccountInfo';
import BusinessInfo from './BusinessInfo';
import Stepper from './Stepper';
import { FARMER_INFO } from './FARMER_INFO';
import { FormProvider } from '../context/FormContext';
import { FormReducer } from '../reducer/FormReducer';

import { formValidation } from '../utils/formValidation';

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
			active: false,
		},
		{
			id: 3,
			title: 'Business',
			active: false,
		},
	];

	const [step, setStep] = useState(1);
	const [progressInfo, setProgressInfo] = useState(stepProgress);
	const [errorInfo, setErrorInfo] = useState({});
	// let error
	// reducer
	const [formState, dispatch] = useReducer(FormReducer, FARMER_INFO);

	// console.log(state)
	const currentStep = () => {
		switch (step) {
			case 1:
				return <Personal />;
			case 2:
				return <AccountInfo />;
			case 3:
				return <BusinessInfo />;
			default:
				break;
		}
	};
	
	//FUNCTIONS

	//onClick event for next
	const btnNext = () => {
		let newObj = formValidation(formState, step); //this assigns errors to new onobj if any
		setErrorInfo(newObj); //this displays errorinfo in the components
		console.log(newObj)
		if(Object.keys(newObj).length === 0 ) {
			setStep((prev) => prev + 1);
			updateProgress(step);
		}
		console.log(formState)
	};
	//onclick event for prev
	const btnBack = () => {
		setStep((prev) => prev - 1);
		updateProgress(step - 1);
	};

	// this updates the numbers when active
	const updateProgress = (index) => {
		let newprogress = JSON.parse(JSON.stringify(progressInfo));
		newprogress[index].active = !newprogress[index].active;
		setProgressInfo(newprogress);
	};
	// this function updates the style if input has error messages
	const errorStyle = (name) => {
		return name in errorInfo ? 'danger--input' : '';
	};

	const handleChange = (e) => {
		dispatch({
			type: 'HANDLE INPUT TEXT',
			field: e.target.name,
			payload: e.target.value,
		});
	};


	return (
		<div className='auth--container flex-col'>
			<form className='form--control'>
				<p className='error'></p>
				<Stepper
					step={step}
					stepProgress={progressInfo}
				/>

				<FormProvider
					value={{ formState, handleChange, errorInfo, errorStyle }}
				>
					<div className='sections'>{currentStep()}</div>
				</FormProvider>

			</form>
			<div className='stepper--controls flex'>
					<button
						type='button'
						className={`btn btn-color ${step == 1 ? 'btn-disable' : ''}`}
						onClick={() => btnBack()}
					>
						Back
					</button>

					{step === stepProgress.length ? (
						<input
							type='submit'
							name='submit'
							value='submit'
							className='btn btn-color'
						/>
					) : (
						<button
							// type='button'
							className='btn btn-color'
							onClick={() => btnNext()}
						>
							Next
						</button>
					)}
				</div>

		</div>
	);
};

export default FarmerSignup;
