import React, { useState, useReducer } from 'react';
import Personal from './Personal';
import AccountInfo from './AccountInfo';
import BusinessInfo from './BusinessInfo';
import Stepper from './Stepper';
import { FARMER_INFO } from './FARMER_INFO';
import { FormProvider } from '../context/FormContext';
import { FormReducer } from '../reducer/FormReducer';

import { farmerFormValidation } from '../utils/formValidation';

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

	// This links the formstate state to the reducers
	const [formState, dispatch] = useReducer(FormReducer, FARMER_INFO);

	// This renders different forms based on the steps
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

	//onClick event for next step
	const btnNext = () => {
		//this assigns errors to a new object if any
		let newObj = farmerFormValidation(formState, step);

		//this displays errorinfo in the components if any
		setErrorInfo(newObj);

		//this makes sure we only proceed to next if errorobj is empty
		if (Object.keys(newObj).length === 0) {
			setStep((prev) => prev + 1);
			updateProgress(step);
		}
	};

	//onclick event for previous step
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

	const handleSubmit = (e) => {
		e.preventDefault();
		let newObj = farmerFormValidation(formState, step); //this assigns errors to new onobj if any
		setErrorInfo(newObj);
		if (Object.keys(newObj).length === 0) {
			console.log(formState)
		}
		
	};

	return (
		<div className='auth--container flex-col'>
			<h2>Farmer Sign-up</h2>
			<form
				className='form--control'
				onSubmit={handleSubmit}
			>
				{/* this displays stepper progress */}
				<p className='error'></p>
				<Stepper
					step={step}
					stepProgress={progressInfo}
				/>
				{/* this displays the steps */}
				<FormProvider
					value={{ formState, handleChange, errorInfo, errorStyle }}
				>
					<div
						className='sections'
						animate={{
							x: 10,
						}}
					>
						{currentStep()}
					</div>
				</FormProvider>
				{/* this displays button control */}
				<div className='stepper--controls flex'>
					<button
						type='button'
						className={`btn btn-color ${step == 1 ? 'btn-disable' : ''}`}
						onClick={() => btnBack()}
					>
						Back
					</button>

					{step !== stepProgress.length ? (
						<button
							key='next-button'
							className='btn btn-color'
							onClick={() => btnNext()}
						>
							Next
						</button>
					) : (
						<button
							className='btn btn-color'
							key='submit-button'
						>
							Submit
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default FarmerSignup;
