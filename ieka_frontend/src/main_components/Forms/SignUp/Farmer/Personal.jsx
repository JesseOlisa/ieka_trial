import React from 'react'
import { useFormContext } from '../context/FormContext'

const Personal = () => {

	const { formState, handleChange, errorInfo, errorStyle } = useFormContext()
	// console.log(errorInfo)

  return (
    <div className='biodata--container'>
						<div>
							<label htmlFor='firstname'>first name</label>
							<input
								type='text'
								name='firstname'
								id='first'
								value={formState.firstname}
								onChange={(e) => handleChange(e)}
								required
							/>
							<p className='error-msg'>{errorInfo.firstname}</p>
						</div>
						<div>
							<label htmlFor='lastname'>last name</label>
							<input
								type='text'
								name='lastname'
								id='last'
								value={formState.lastname}
								onChange={(e) => handleChange(e)}
								required
							/>
							<p className='error-msg'>{errorInfo.lastname}</p>
						</div>
						<div>
							<label htmlFor='address'>address</label>
							<input
								type='text'
								name='address'
								id='address'
								value={formState.address}
								onChange={(e) => handleChange(e)}
								required
							/>
							<p className='error-msg'>{errorInfo.address}</p>
						</div>
						<div>
							<label htmlFor='email'>email</label>
							<input
								type='email'
								name='email'
								id='email'
								value={formState.email}
								onChange={(e) => handleChange(e)}
								required
							/>
						</div>
						<div>
							<label htmlFor='password'>passcode</label>
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
							<label htmlFor='phone'>phone number</label>
							<input
								type='tel'
								name='phone'
								id='phone'
								value={formState.phone}
								onChange={(e) => handleChange(e)}
								required
							/>
							<p className='error-msg'>{errorInfo.phone}</p>
						</div>
					</div>
					
  )
}

export default Personal