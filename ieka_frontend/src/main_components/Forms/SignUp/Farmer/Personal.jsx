import React from 'react'

const Personal = () => {
  return (
    <div className='biodata--container'>
						<div>
							<label htmlFor='firstname'>first name</label>
							<input
								type='text'
								name='firstname'
								id='first'
								required
							/>
						</div>
						<div>
							<label htmlFor='lastname'>last name</label>
							<input
								type='text'
								name='lastname'
								id='last'
								required
							/>
						</div>
						<div>
							<label htmlFor='address'>address</label>
							<input
								type='text'
								name='address'
								id='address'
								required
							/>
						</div>
						<div>
							<label htmlFor='email'>email</label>
							<input
								type='email'
								name='email'
								id='email'
								required
							/>
						</div>
						<div>
							<label htmlFor='password'>passcode</label>
							<input
								type='password'
								name='password'
								id='password'
							/>
						</div>
						<div>
							<label htmlFor='phone'>phone number</label>
							<input
								type='tel'
								name='phone'
								id='phone'
								required
							/>
						</div>
					</div>
					
  )
}

export default Personal