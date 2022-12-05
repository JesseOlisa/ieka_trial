import React from 'react'
import { useFormContext } from '../context/FormContext'


const BusinessInfo = () => {
	const { formState, handleChange, errorInfo, errorStyle } = useFormContext()

  return (
    <div className='business-info'>
						<div>
							<label htmlFor='farm-state'>farm state</label>
							<input
								type='text'
								name='farmState'
								id='farm-state'
								value={formState.farmState}
								onChange={(e) => {handleChange(e)}}
								required
							/>
							<p className='error-msg'>{errorInfo.farmState}</p>
						</div>
						<div>
							<label htmlFor='farm-address'>farm address</label>
							<input
								type='text'
								name='farmAddress'
								id='farm-address'
								value={formState.farmAddress}
								onChange={(e) => {handleChange(e)}}
								required
							/>
							<p className='error-msg'>{errorInfo.farmAddress}</p>
						</div>
						<div>
							<label htmlFor='farm-country'>farm country</label>
							<input
								type='text'
								id='farmCountry'
								name='farm-country'
								value={formState.farmCountry}
								onChange={(e) => {handleChange(e)}}
							/>
							<p className='error-msg'>{errorInfo.farmCountry}</p>
						</div>
						<div>
							<label htmlFor='products'>your agro products</label>
							<textarea
								name='agroproducts'
								id='products'
								cols='50'
								rows='3'
								value={formState.agroProducts}
								onChange={(e) => {handleChange(e)}}
								required
							></textarea>
							<p className='error-msg'>{errorInfo.agroProducts}</p>
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