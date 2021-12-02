import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Pages/Register.css';
import { RegisterComp } from '../../Components/Register/RegisterComp';

import RegisterLogo from '../../Supports/Assets/Sign/register-ilus.svg';

const Register = () => {
	return (
		<div className='register-container p-5 mx-5'>
			<div className='reg-form-container shadow row'>
				<div className='img-container col me-5 p-0'>
					<img src={RegisterLogo} alt='Register' />
				</div>
				<div className='reg-input-form-container col p-5'>
					<div className='daftar mb-3'>
						<h3>Daftar</h3>
					</div>
					<div className='form mb-2'>
						<RegisterComp />
					</div>
					<div className='have-account text-center'>
						<p>
							Sudah punya akun? <a href='/login'>Klik disini</a> untuk login
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Register;
