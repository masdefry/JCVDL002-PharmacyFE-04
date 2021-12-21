import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin, Login } from '../../Redux/Actions/userActions';

export const SignInComp = () => {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLoginReducer);
	const { userInfo } = userLogin;

	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	useEffect(() => {
		console.log(userInfo);
		if (userInfo) {
			navigate('/');
		}
	}, [userInfo]);

	useEffect(() => {
		if (userInfo) {
			navigate('/');
		}
		console.log(userInfo);
	}, []);

	let token = localStorage.getItem('userInfoToken');
	useEffect(() => {
		if (token) {
			navigate('/');
		}

	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(Login(Email, Password));
	};

	return (
		<form className='form-container d-grid mx-3' onSubmit={submitHandler}>
			<div className='form-group my-3'>
				<label htmlFor='Email'>Email</label>
				<input
					type='email'
					className='form-control'
					id='Email'
					aria-describedby='emailHelp'
					placeholder='Enter email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='form-group my-3'>
				<label htmlFor='exampleInputPassword1'>Password</label>
				<input
					type='password'
					className='form-control'
					id='Password'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button className='submit-btn btn-lg mt-5' type='submit'>
				Masuk
			</button>
		</form>
	);
};
