import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchActiveAddress, fetchAddress, keepLogin, profileDetail, fetchUserPrescriptionOrder } from '../../Redux/Actions/userActions';

import { Footer } from '../../Components/Footer/Footer';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLoginReducer);
	const { userInfo } = userLogin;

	console.log(userInfo);
	useEffect(() => {
		if (userInfo) {
			dispatch(keepLogin());
		}
		if (userInfo) {
			console.log('landing page' + userInfo);
		}
	}, [userInfo]);

	const token = localStorage.getItem('userInfoToken');
	useEffect(() => {
		if (token) {
			navigate('/');
			dispatch(profileDetail());
			dispatch(fetchAddress());
			dispatch(fetchActiveAddress());
			dispatch(fetchUserPrescriptionOrder());
		} else if (!token) {
			navigate('/login');
		}

	}, []);

	return (
		<div>
			<h4>Home</h4>
			<Footer />
		</div>
	);
};
export default Home;
