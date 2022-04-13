import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Pages/Register.css';
import { useParams } from 'react-router-dom';

import { Footer } from '../../Components/Footer/Footer';
import { ResetPasswordComp } from '../../Components/ForgotPassword/ResetPasswordComp';

import RegisterImg from '../../Supports/Assets/Sign/register-ilus.svg';

const ResetPassword = (props) => {
	const params = useParams();
	let dataToken = params.token;
	console.log(dataToken);

	return (
		<div className="forgot-outer">
			<div className='forgot-container p-5 mx-5'>
				<div className='forgot-form-container m-5 shadow row mx-auto'>
					<div className='img-container col p-0'>
						<img src={RegisterImg} alt='Logo' />
					</div>
					<div className='forgot-input-form col p-5'>
						<div className='lupa ms-3 mb-5'>
							<h3>Reset Password</h3>
						</div>
						<div className='form mb-1'>
							<ResetPasswordComp userData={dataToken} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default ResetPassword;
