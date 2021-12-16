import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import { EmailValidator } from '../../Supports/Functions/EmailValidator';
import { forgotPassword } from '../../Redux/Actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

export const ForgotPasswordComp = () => {
	const dispatch = useDispatch();
	const register = useSelector((state) => state.userRegisterReducer);

	const [Email, setEmail] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(forgotPassword(Email));
	};

	return (
		<form className='form-container d-grid mx-3' onSubmit={submitHandler}>
			<div className='form-group my-2'>
				<label className='mb-2' htmlFor='Email'>
					Email
				</label>
				<input
					type='email'
					className='form-control'
					id='Email'
					aria-describedby='emailHelp'
					placeholder='Enter email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className='err'>
					{Email === ''
						? null
						: EmailValidator(Email)
						? null
						: `Email did not valid!`}
				</div>
			</div>
			<button
				disabled={EmailValidator(Email) === false}
				className='submit-btn btn-lg mt-4'
				type='submit'>
				Daftar
			</button>
		</form>
	);
};
