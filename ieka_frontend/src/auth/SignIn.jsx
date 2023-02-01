import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { dummyuser } from '../utils/dummyuser';
import { useAuth } from '../hooks/useAuth';
import './signin.css';

const style = {
	color: '#2B65EC',
	textDecoration: 'underline',
	display: 'block',
};

const SignIn = () => {
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// AUTH USER HERE
	const handleSubmit = (e) => {
		e.preventDefault();

		dummyuser.map((user) => {
			if (user.email === email && user.password === password) {
				setAuth({
					userEmail: user.email,
					password: user.password,
					roles: user.role,
				});
			}
			setEmail('');
			setPassword('');
			navigate(from, { replace: true });
		});
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
					onSubmit={handleSubmit}
					className='form--control sign-in'
				>
					<label htmlFor='phone-number'>
						<p>Email</p>
						<input
							type='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label htmlFor='password'>
						<p>Password</p>
						<input
							type='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<button className='btn btn-auth'>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
