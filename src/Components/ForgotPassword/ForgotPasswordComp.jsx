import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField/InputField';

export const ForgotPasswordComp = () => {
	const validation = Yup.object({
		email: Yup.string()
			.email(`Email invalid`)
			.required(`Email tidak boleh kosong`),
	});
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={validation}
			onSubmit={(values) => {
				console.log(values);
			}}>
			{(params) => (
				<div className='form'>
					<Form className='form-container d-grid gap-2'>
						<InputField label='Email' name='email' type='text' />
						<button className='submit-btn btn-lg mt-3'>Lanjut</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};
