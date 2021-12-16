import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Pages/Register.css';
import { SignInComp } from '../../Components/SingIn/SignInComp';

import Fb from '../../Supports/Assets/Socmed/cFb.svg';
import google from '../../Supports/Assets/Socmed/Google.svg';

import SignInLogo from '../../Supports/Assets/Sign/login-illustration.svg';

const Register = () => {
	return (
		<div className='login-container p-5 m-5'>
			<div className='form-container shadow row mx-auto'>
				<div className='img-container col p-0'>
					<img src={SignInLogo} alt='Register' />
				</div>
				<div className='sign-input-form-container col p-5'>
					<div className='daftar mb-3'>
						<h3>Log In</h3>
					</div>
					<div className='form'>
						<SignInComp />
					</div>
					<div className='forgot-etc d-grid my-3 gap-2 justify-content-center text-center '>
						<a href='/login/forgot-password'>Lupa Password?</a>
						<p>Atau login dengan</p>
						<div className='google-facebook shadow mb-1 d-flex justify-content-evenly'>
							<div className='a-container'>
								<a href='#'>
									<img src={google} alt='' width='14' height='14' />
									<span className='ms-1'>Google</span>
								</a>
							</div>
							<div className='a-container'>
								<a href='#'>
									<img src={Fb} alt='' width='14' height='14' />
									<span className='ms-1'>Facebook</span>
								</a>
							</div>
						</div>
						<div className='reg'>
							<span>Belum punya akun?</span>
							<a href='/register'>
								{' '}
								<b>Daftar</b>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Register;
