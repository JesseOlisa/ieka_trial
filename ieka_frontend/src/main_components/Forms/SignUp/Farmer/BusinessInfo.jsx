import React from 'react'

const BusinessInfo = () => {
  return (
    <div className='business-info'>
						<div>
							<label htmlFor='farm-state'>farm state</label>
							<input
								type='text'
								name='farm-state'
								id='farm-state'
								required
							/>
						</div>
						<div>
							<label htmlFor='farm-address'>farm address</label>
							<input
								type='text'
								name='farm-address'
								id='farm-address'
								required
							/>
						</div>
						<div>
							<label htmlFor='farm-country'>farm country</label>
							<input
								type='text'
								id='farm-country'
								name='farm-country'
							/>
						</div>
						<div>
							<label htmlFor='products'>your agro products</label>
							<textarea
								name='products'
								id='products'
								cols='50'
								rows='3'
								required
							></textarea>
						</div>
						<div>
							<label htmlFor='image'>select image</label>
							<input
								type='file'
								name='picture'
							/>
						</div>
					</div>

  )
}

export default BusinessInfo