import React from 'react';
import { Link } from 'react-router-dom';

import './signin.css';

const SignIn = () => {
	const style = {
		color: '#2B65EC',
		textDecoration: 'underline',
		display: 'block',
	};

	return (
		<div className='auth--container'>
			<div className='flex auth-content'>
				<h4 className='sign-up--content'>
					Don't have an account?
					<Link
						to='/sign-up'
						style={style}
					>
						Create one here
					</Link>
				</h4>
				{/* SIGN-IN FORM */}
				<form
					action=''
					className='form--control sign-in'
				>
					<label htmlFor='phone-number'>
						<p>Phone Number</p>
						<input
							type='text'
							name='phone-number'
						/>
					</label>
					<label htmlFor='password'>
						<p>Password</p>
						<input
							type='password'
							name='passcode'
						/>
					</label>
					<button className='btn btn-auth'>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
