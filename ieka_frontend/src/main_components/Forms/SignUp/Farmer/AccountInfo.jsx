import React from 'react'

const AccountInfo = () => {
  return (
    <div className='section-2'>
						<div>
							<label htmlFor='gender'>gender</label>
							<input
								type='checkbox'
								name='gender'
								id='male'
								value='male'
							/>
							<span className='male'>male</span>
							<input
								type='checkbox'
								name='gender'
								id='female'
								value='female'
							/>
							<span className='female'>Female</span>
						</div>
						<div>
							<label htmlFor='state-of-origin'>State-of-Origin</label>
							<input
								type='text'
								name='state-of-origin'
								id='state-of-origin'
								required
							/>
						</div>
						<div>
							<label htmlFor='residence-state'>residence state</label>
							<input
								type='text'
								name='residence-state'
								id='residence-state'
								required
							/>
						</div>
						<div>
							<label htmlFor='residence-country'>residence country</label>
							<input
								type='text'
								name='residence-country'
								id='residence-country'
								required
							/>
						</div>
						<div>
							<label htmlFor='country-of-origin'>Country-of-Origin</label>
							<input
								type='text'
								name='country-of-origin'
								id='country-of-origin'
							/>
						</div>
					</div>
					
  )
}

export default AccountInfo