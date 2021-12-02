import React from 'react';
import '../../Supports/Stylesheets/Components/RegisterComp.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField/InputField';

export const RegisterComp = () => {
	const validation = Yup.object({
		name: Yup.string()
			.max(25, `Nama tidak boleh lebih dari 25 karakter`)
			.required(`Nama tidak boleh kosong`),
		email: Yup.string()
			.email(`Email invalid`)
			.required(`Email tidak boleh kosong`),
		password: Yup.string()
			.min(8, `Password harus lebih dari 8 karakter`)
			.required(`Password tidak boleh kosong`),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref(`password`), null], `Password tidak cocok`)
			.required(`Ketik ulang password anda`),
	});

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={validation}
			onSubmit={(values) => {
				console.log(values);
			}}>
			{(params) => (
				<div className='form'>
					<Form className='form-container d-grid'>
						<InputField label='Nama' name='name' type='text' />
						<InputField label='Email' name='email' type='text' />
						<InputField label='Password' name='password' type='password' />
						<InputField
							label='Confirm Password'
							name='password'
							type='password'
						/>
						<div className='radio-confirm'>
							<input type='checkbox' />
							<span>
								{'  '}Saya menyetujui <a href='#'>Ketentuan</a> dan{' '}
								<a href='#'>Kebijakan Privasi</a> di SehatY.
							</span>
						</div>
						<button className='submit-btn btn-lg mt-3' type='submit'>
							Daftar
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};
