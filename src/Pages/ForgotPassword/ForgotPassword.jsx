import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Pages/Register.css';
import { useSelector } from 'react-redux';

import { Footer } from '../../Components/Footer/Footer';
import { ForgotPasswordComp } from '../../Components/ForgotPassword/ForgotPasswordComp';

import RegisterImg from '../../Supports/Assets/Sign/register-ilus.svg';

const ForgotPassword = () => {

	const resetState = useSelector((state) => state.forgotPasswordReducer);
	console.log({ resetState });

	return (
		<div className="forgot-outer">
			<div className='forgot-container p-5 mx-5'>
				<div className='forgot-form-container m-5 shadow row mx-auto'>
					<div className='img-container col p-0'>
						<img src={RegisterImg} alt='Logo' />
					</div>
					<div className='forgot-input-form col p-5'>
						<div className='lupa mb-5'>
							<h3>Lupa Password</h3>
						</div>
						<div className='form mb-1'>
							<ForgotPasswordComp />
						</div>
						<div className='alert'>
							<p>
								<b>Ikuti petunjuk pada email untuk aktivasi password baru.</b>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default ForgotPassword;
