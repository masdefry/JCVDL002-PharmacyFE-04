import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import { EmailValidator } from '../../Supports/Functions/EmailValidator';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';
import { RESET_PASSWORD_REQUEST } from '../../Supports/Constants/userConstants';

export const ForgotPasswordComp = () => {
	const dispatch = useDispatch();
	const register = useSelector((state) => state.userRegisterReducer);

	const [Email, setEmail] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		Axios.post(`${API_URL}/user/forgotpassword`, { Email }, config)
			.then((result) => {
				dispatch({
					type: RESET_PASSWORD_REQUEST,
				});
			})
			.catch((err) => {
				console.log(err);
				throw err;
			});

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
				Reset Password
			</button>
		</form>
	);
};
