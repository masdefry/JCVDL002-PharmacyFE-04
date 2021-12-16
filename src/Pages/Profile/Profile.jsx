import React, { useState } from 'react';
import '../../Supports/Stylesheets/Pages/Profile.css';

import { UserTransaction } from '../../Components/Profile/userTransaction';
import { UserProfile } from '../../Components/Profile/userProfile';
import { AdminManage } from '../../Components/Profile/adminManage';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';

const Profile = () => {
	const [page, setPage] = useState('profile');

	return (
		<div className='profile-container'>
			<div className='row'>
				<div className='mini-profile-card shadow p-3 col h-100 me-2'>
					<div className='mini-profile row m-0'>
						<img src={PPlaceholder} alt='' className='col-2' />
						<div className='mini-detail p-2 row'>
							<h4>Dimas Aristyo</h4>
							<p>dearistyo@gmail.com</p>
							<button onClick={() => setPage('profile')}>
								<em>Lihat Profile</em>
							</button>
						</div>
					</div>
					<div className='button-container '>
						<button
							className='trans-button row my-3 p-0'
							align='center'
							onClick={() => setPage('transaction')}>
							<img src={Transaction} className='tr-wallet col' />
							<span className='col'>
								<strong>Transaction</strong>
							</span>
							<img src={Arrow} className='tr-arrow col my-auto' />
						</button>
						<button
							className='admin-button row mt-3 p-0'
							align='center'
							onClick={() => setPage('admin')}>
							<img src={Admin} className='tr-wallet col' />
							<span className='col ms-auto'>
								<strong>Admin</strong>
							</span>
							<img src={Arrow} className='tr-arrow col my-auto' />
						</button>
					</div>
				</div>
				<div className='profile-selection col-9 ms-5'>
					{page === 'profile' ? (
						<div className='user-profile-selection'>
							<h3>Profil Kamu</h3>
							<p>Profil Lengkap, akses fitur semakin cepat!</p>
							<div className='profile-card'>
								<UserProfile />
							</div>
						</div>
					) : page === 'transaction' ? (
						<div className='profile-card border'>
							<UserTransaction />
						</div>
					) : page === 'admin' ? (
						<div className='profile-card border'>
							<AdminManage />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};
export default Profile;
