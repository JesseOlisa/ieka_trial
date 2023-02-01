import React from 'react';
import { useFormContext } from '../../context/FormContext';

const AccountInfo = () => {
	const { formState, handleChange, errorInfo, errorStyle } = useFormContext();
	const radioStyle = {
		marginTop: '0',
		marginRight: '1rem',
	};
	return (
		<div className='section-2'>
			<div>
				<h4>Gender</h4>
				<input
					type='radio'
					name='gender'
					id='male'
					value='male'
					checked={formState.gender === 'male'}
					onChange={(e) => handleChange(e)}
				/>
				<label
					htmlFor='male'
					style={radioStyle}
				>
					Male
				</label>
				<input
					type='radio'
					name='gender'
					id='female'
					value='female'
					checked={formState.gender === 'female'}
					onChange={(e) => handleChange(e)}
				/>
				<label
					htmlFor='female'
					style={radioStyle}
				>
					Female
				</label>
			</div>
			<div>
				<label htmlFor='state-of-origin'>State-of-Origin</label>
				<input
					type='text'
					name='stateOrigin'
					id='state-of-origin'
					value={formState.stateOrigin}
					onChange={(e) => handleChange(e)}
					required
				/>
				<p className='error-msg'>{errorInfo.stateOrigin}</p>
			</div>
			<div>
				<label htmlFor='residence-state'>Residence state</label>
				<input
					type='text'
					name='residenceState'
					id='residence-state'
					value={formState.residenceState}
					onChange={(e) => handleChange(e)}
					required
				/>
				<p className='error-msg'>{errorInfo.residenceState}</p>
			</div>
			<div>
				<label htmlFor='residence-country'>Residence country</label>
				<input
					type='text'
					name='residenceCountry'
					id='residence-country'
					value={formState.residenceCountry}
					onChange={(e) => handleChange(e)}
					required
				/>
				<p className='error-msg'>{errorInfo.residenceCountry}</p>
			</div>
			<div>
				<label htmlFor='country-of-origin'>Country-of-Origin</label>
				<input
					type='text'
					name='countryOrigin'
					id='country-of-origin'
					value={formState.countryOrigin}
					onChange={(e) => handleChange(e)}
				/>
				<p className='error-msg'>{errorInfo.countryOrigin}</p>
			</div>
		</div>
	);
};

export default AccountInfo;
