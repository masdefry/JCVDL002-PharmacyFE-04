import React, { useEffect, useState } from 'react';
import '../../Supports/Stylesheets/Pages/Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserTransaction } from '../../Components/Profile/userTransaction/userTransaction';
import { UserProfile } from '../../Components/Profile/userProfile';
import { AdminManage } from '../../Components/Profile/adminManage';
import { SettingsComp } from '../../Components/Profile/SettingsComp';
import { keepLogin, profileDetail } from '../../Redux/Actions/userActions';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';
import Settings from '../../Supports/Assets/Profile/cog.svg';
import { Route, Routes } from 'react-router-dom';

const Profile = () => {

	const userProfile = useSelector((state) => state.userDetailReducer);
	const { userDetail } = userProfile;
	console.log('data user' + JSON.stringify(userDetail));

	const [page, setPage] = useState('profile');

	return (
		<div className='profile-container container'>
			<div className='row'>
				<div className='mini-profile-card shadow py-3 px-0 col h-100 me-2'>
					<div className='mini-profile px-2 row m-0'>
						{userDetail.profileImg ?
							<img src={userDetail.profileImg} alt='' className='col-2' />
							:
							<img src={PPlaceholder} alt='' className='profile-img col-2' />
						}
						<div className='mini-detail p-2 row'>
							<h4>{userDetail.name}</h4>
							<p>{userDetail.email}</p>
							<button onClick={() => setPage('profile')}>
								<em>Lihat Profile</em>
							</button>
						</div>
					</div>
					<div className='button-container '>
						<button
							className='trans-button row px-1 mx-0 my-3 p-0'
							align='center'
							onClick={() => setPage('transaction')}>
							<img src={Transaction} className='tr-wallet col' />
							<span className='col'>
								<strong>Transaction</strong>
							</span>
							<img src={Arrow} className='tr-arrow col my-auto' />
						</button>
						{userDetail.role === 'admin' ?
							<Link to='/admin' className='admin-button row px-1 mx-0 mt-3 p-0'>
								<img src={Admin} className='tr-wallet col' />
								<span className='col ms-auto'>
									<strong>Admin</strong>
								</span>
								<img src={Arrow} className='tr-arrow col my-auto' />
							</Link>
							:
							null
						}
						<div className="setting border-top border-2 mt-3">
							<button
								className='settings-button px-1 mx-0 mt-2 row p-0'
								align='center'
								onClick={() => setPage('settings')}>
								<img src={Settings} className='tr-wallet col' />
								<span className='col ms-auto'>
									<strong>Settings</strong>
								</span>
								<img src={Arrow} className='tr-arrow col my-auto' />
							</button>
						</div>
					</div>
				</div>
				<div className='profile-selection col-9 ms-5'>
					{page === 'profile' ? (
						<div className='user-profile-selection'>
							<h3>Profil Kamu</h3>
							<p>Profil Lengkap, akses fitur semakin cepat!</p>
							<div className='profile-card'>
								<UserProfile profiledata={{ userDetail }} />
							</div>
						</div>
					) : page === 'transaction' ? (
						<div className='profile-card border'>
							<UserTransaction />
						</div>
					) : page === 'admin' && userDetail.role ? (
						<div className='profile-card border'>
							<AdminManage />
						</div>
					) : page === 'settings' ? (
						<div className="profile-card border">
							<SettingsComp />
						</div>
					)
						: null}
					{/* <Routes>
						<Route path='/transaction' element={<Home />} />
						<Route path='/admin' element={<Home />} />
						<Route path='/settings' element={<Home />} />
						</Routes> */}
				</div>
			</div>
		</div>
	);
};
export default Profile;
