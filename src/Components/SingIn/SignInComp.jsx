import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField/InputField';

export const SignInComp = () => {
	const validation = Yup.object({
		email: Yup.string()
			.email(`Email invalid`)
			.required(`Email tidak boleh kosong`),
		password: Yup.string().required(`Password tidak boleh kosong`),
	});

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={validation}
			onSubmit={(values) => {
				console.log(values);
			}}>
			{(params) => (
				<div className='form'>
					<Form className='form-container d-grid gap-2'>
						<InputField label='Email' name='email' type='text' />
						<InputField label='Password' name='password' type='password' />
						<button className='submit-btn btn-lg mt-3' type='submit'>
							Daftar
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};
