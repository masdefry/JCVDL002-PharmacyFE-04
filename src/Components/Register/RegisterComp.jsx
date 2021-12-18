import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userRegister } from '../../Redux/Actions/userActions';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import { EmailValidator } from '../../Supports/Functions/EmailValidator';
import { useNavigate } from 'react-router-dom';

export const RegisterComp = () => {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const register = useSelector((state) => state.userRegisterReducer);
	const { userInfo } = register;

	const [FullName, setFullName] = useState('');
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const [ConfirmPassword, setConfirmPassword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(userRegister(FullName, Email, Password));
	};

	useEffect(() => {
		if (userInfo) {
			navigate('/afterRegister');
		}
	}, [userInfo]);

	let token = localStorage.getItem('userInfoToken');
	useEffect(() => {
		if (token) {
			navigate('/');
		}

	}, []);

	return (
		<form className='form-container d-grid mx-3' onSubmit={submitHandler}>
			<div className='form-group my-2'>
				<label className='mb-2' htmlFor='Full-Name'>
					Name
				</label>
				<input
					type='text'
					className='form-control'
					id='Full-Name'
					placeholder='Full Name'
					onChange={(e) => setFullName(e.target.value)}
				/>
			</div>
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
							: `Enter a valid email!`}
				</div>
			</div>
			<div class='form-group my-2'>
				<label className='mb-2' for='Password'>
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
					{Password === ''
						? null
						: Password.length >= 8
							? null
							: `Password can't be less than 8 character`}
				</div>
			</div>
			<div class='form-group my-2'>
				<label className='mb-2' for='confirmPassword'>
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
					{ConfirmPassword === ''
						? null
						: Password === ConfirmPassword
							? null
							: 'Password Did not Match'}
				</div>
			</div>
			<button className='submit-btn btn-lg mt-4' type='submit'>
				Daftar
			</button>
		</form>
	);
};
