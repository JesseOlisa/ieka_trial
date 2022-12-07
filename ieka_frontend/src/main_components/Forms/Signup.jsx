import React, { useState } from 'react';
import FarmerSignup from './SignUp/Farmer/FarmerSignup';
import CustomerSignup from './SignUp/Customer/CustomerSignup';
import { Link } from 'react-router-dom';

import './signup.css';

const Signup = () => {
	return (
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
	);
};

export default Signup;
