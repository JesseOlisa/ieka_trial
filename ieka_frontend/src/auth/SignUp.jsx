import React from 'react';
import { Link } from 'react-router-dom';

import './signup.css';

const SignUp = () => {
	return (
		<>
			<div>
				<div className='flex flex-col container'>
					<p>Who do you want to join IEKA as:</p>

					<div className='flex choice-container'>
						<Link
							to='/sign-up/customer-signup'
							className='btn btn-color'
						>
							Customer
						</Link>
						<Link
							to='/sign-up/farmer-signup'
							className='btn btn-color'
						>
							Farmer
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
