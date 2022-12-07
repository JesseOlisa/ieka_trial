import React, { useState, useEffect, useReducer } from 'react';
import { Country, State } from 'country-state-city';
import { CUSTOMER_INFO } from './CUSTOMER_INFO';
import { FormReducer } from '../reducer/FormReducer';

import { customerFormValidation } from '../utils/formValidation';

const CustomerSignup = () => {
	// console.log(Country.getAllCountries())

	const [formState, dispatch] = useReducer(FormReducer, CUSTOMER_INFO);
	const [errorInfo, setErrorInfo] = useState({});
	const [allCountries, setAllCountries] = useState([]);
	const [allStates, setAllStates] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('');
	const [selectedState, setselectedState] = useState('');

	// useEffect to set State once all states are selected
	useEffect(() => {
		let countries = Country.getAllCountries();
		setAllCountries(countries);
	}, []);

	// useEffect to set State once all states are selected
	useEffect(() => {
		let state = State.getStatesOfCountry(selectedCountry);
		setAllStates(state);
	}, [selectedCountry]);

	// handleChange function
	const handleChange = (e) => {
		dispatch({
			type: 'HANDLE INPUT TEXT',
			field: e.target.name,
			payload: e.target.value,
		});
	};
	//handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		let newError = customerFormValidation(formState)
		setErrorInfo(newError)
		if (Object.keys(newError).length === 0) {
			console.log('form submitted')
		}
	}

	return (
		<div className='auth--container flex'>
			<h2>Customer Signup</h2>
			<form className='form--control' onSubmit={handleSubmit}>
				<div className='flex name--section'>
					{/* firstname */}
					<div>
						<label htmlFor='firstname'>First name</label>
						<input
							type='text'
							name='firstname'
							id='first'
							value={formState.firstname}
							onChange={(e) => handleChange(e)}
							// required
						/>
						<p className='error-msg'>{errorInfo.firstname}</p>
					</div>
					{/* last name */}
					<div>
						<label htmlFor='lastname'>Last name</label>
						<input
							type='text'
							name='lastname'
							id='last'
							value={formState.lastname}
							onChange={(e) => handleChange(e)}
							// required
						/>
						<p className='error-msg'>{errorInfo.lastname}</p>
					</div>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						value={formState.email}
						onChange={(e) => handleChange(e)}
						// required
					/>
				</div>
				<div>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						name='address'
						id='address'
						value={formState.address}
						onChange={(e) => handleChange(e)}
						// required
					/>
					<p className='error-msg'>{errorInfo.address}</p>
				</div>
				<div>
					<h3>Gender:</h3>
					<input
						type='radio'
						name='gender'
						id='male'
						value='male'
						checked={formState.gender === 'male'}
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='male'>Male</label>
					<input
						type='radio'
						name='gender'
						id='female'
						value='female'
						checked={formState.gender === 'female'}
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='female'>Female</label>
				</div>
				<div>
					<label htmlFor='phone'>Phone number</label>
					<input
						type='tel'
						name='phone'
						id='phone'
						value={formState.phone}
						onChange={(e) => handleChange(e)}
						// required
					/>
					<p className='error-msg'>{errorInfo.phone}</p>
				</div>
				<div>
					<label htmlFor='password'>Passcode</label>
					<input
						type='password'
						name='password'
						id='password'
						value={formState.password}
						onChange={(e) => handleChange(e)}
					/>
					<p className='error-msg'>{errorInfo.password}</p>
				</div>
				<div>
					<label htmlFor='image'>select image</label>
					<input
						type='file'
						name='picture'
					/>
				</div>

				<div>
					<select
						name='residenceCountry'
						id='country'
						value={formState.residenceCountry}
						onChange={(e) => {
							let isoCode =
								e.target[e.target.selectedIndex].getAttribute(
									'data-country-iso'
								);
							setSelectedCountry(isoCode);
							handleChange(e);
						}}
					>
						<option value=''>--Choose Country--</option>

						{allCountries.map((countryName) => {
							return (
								<option
									value={countryName.name}
									key={countryName.isoCode}
									data-country-iso={countryName.isoCode}
								>
									{countryName.name}
								</option>
							);
						})}
					</select>
					<select
						name='residenceState'
						id='state'
						value={selectedState}
						onChange={(e) => {
							setselectedState(e.target.value);
							handleChange(e);
						}}
					>
						<option value=''>-- Choose State --</option>
						{allStates.map((stateName, index) => {
							return (
								<option
									value={stateName.name}
									key={index}
								>
									{stateName.name}
								</option>
							);
						})}
					</select>
				</div>
				<button className='btn btn-color'>Sign Up</button>

			</form>
		</div>
	);
};

export default CustomerSignup;
