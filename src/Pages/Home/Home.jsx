import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLoginReducer);
	const { userInfo } = userLogin;

	console.log(userInfo);
	useEffect(() => {
		if (userInfo) {
			console.log('landing page' + userInfo);
		}
	}, []);

	const token = localStorage.getItem('userInfoToken');
	useEffect(() => {
		if (token) {
			navigate('/');
		}

	}, []);

	return (
		<div>
			<h4>Home</h4>
		</div>
	);
};
export default Home;
