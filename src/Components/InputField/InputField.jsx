import React from 'react';
import { ErrorMessage, useField } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';

export const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className='input-container mb-3'>
			<label htmlFor={field.name}>{label}</label>
			<input
				className={`form-control my-1 ${
					meta.touched && meta.error && 'is-invalid'
				}`}
				{...field}
				{...props}
				autoComplete='off'
			/>
			<ErrorMessage component='div' name={field.name} className='error' />
		</div>
	);
};
