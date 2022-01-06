import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import { EmailValidator } from '../../Supports/Functions/EmailValidator';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

export const ResetPasswordComp = (props) => {
	const dispatch = useDispatch();
	const resetState = useSelector((state) => state.userRegisterReducer);

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	console.log(props.userData);

	const submitHandler = (e) => {
		e.preventDefault();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					'token': `${props.userData}`
				}
			};

			Axios.patch(
				`${API_URL}/user/verifyEmail`, { password }, config
			)
				.then(res => {
					setMessage('Success');
				});

		} catch (err) {
			console.log(err);
			throw err;
		};
	};

	return (
		<form className='form-container d-grid mx-3' onSubmit={submitHandler}>
			<div className='form-group my-2'>
				<label className='mb-2' htmlFor='Password'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='Password'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className='err'>
					{password === ''
						? null
						: password.length >= 8
							? null
							: `Password can't be less than 8 character`}
				</div>
			</div>
			<div className='form-group my-2'>
				<label className='mb-2' htmlFor='confirmPassword'>
					Confirm Password
				</label>
				<input
					type='password'
					className='form-control'
					id='confirmPassword'
					placeholder='Confirm Password'
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<div className='err'>
					{confirmPassword === ''
						? null
						: password === confirmPassword
							? null
							: 'Password Did not Match'}
				</div>
			</div>
			<button
				disabled={confirmPassword === '' || confirmPassword !== password}
				className='submit-btn btn-lg mt-4'
				type='submit'>
				Reset Password
			</button>
		</form>
	);
};
