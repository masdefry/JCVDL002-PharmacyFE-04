import React, { useEffect, useState } from 'react';
import '../../Supports/Stylesheets/Pages/Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { UserTransaction } from '../../Components/Profile/userTransaction/userTransaction';
import { OnGoingTransaction } from '../../Components/Profile/userTransaction/onGoingTransaction';
import { UserProfile } from '../../Components/Profile/userProfile';
import { SettingsComp } from '../../Components/Profile/SettingsComp';
import { AddressComp } from '../../Components/Profile/AddressComp';
import { keepLogin, profileDetail } from '../../Redux/Actions/userActions';
import { fetchUserPrescriptionOrder } from '../../Redux/Actions/userActions';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';
import Settings from '../../Supports/Assets/Profile/cog.svg';
import address from '../../Supports/Assets/Profile/address-slim.svg';

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userProfile = useSelector((state) => state.userDetailReducer);
	const { userDetail } = userProfile;
	console.log('data user' + JSON.stringify(userDetail));

	const [page, setPage] = useState('profile');
	const [transactionPage, setTransactionPage] = useState('ongoing');

	const token = localStorage.getItem('userInfoToken');

	useEffect(() => {
		if (token && userDetail) {
			navigate('/profile');
		} else if (!token && userDetail === undefined) {
			navigate('/login');
		}
		dispatch(fetchUserPrescriptionOrder());
		dispatch(profileDetail());
		dispatch(keepLogin);

	}, []);

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
							className={page === 'address' ? 'trans-button row px-1 mx-0 mt-3 mb-2 p-0' : 'trans-button row px-1 mx-0 my-3 p-0'}
							align='center'
							onClick={() => setPage('address')}>
							<img src={address} className='tr-wallet col' />
							<span className='col'>
								<strong>Alamat</strong>
							</span>
							<img src={Arrow} className='tr-arrow col my-auto' />
						</button>
						<button
							className={page === 'transaction' ? 'trans-button row px-1 mx-0 mt-3 mb-2 p-0' : 'trans-button row px-1 mx-0 my-3 p-0'}
							align='center'
							onClick={() => setPage('transaction')}>
							<img src={Transaction} className='tr-wallet col' />
							<span className='col'>
								<strong>Transaksi</strong>
							</span>
							<img src={Arrow} className='tr-arrow col my-auto' />
						</button>
						{page === 'transaction' ?
							<div className="inner-transaction" id='inner-trans'>
								<button
									className='inner-trans-button row pt-2 ps-4 pe-3 mx-0 my-2 p-0'
									id='inner-trans-btn'
									align='center'
									onClick={() => setTransactionPage('ongoing')}>
									<span className='col'>
										<p>Produk</p>
									</span>
									<img src={Arrow} className='tr-arrow col my-auto' />
								</button>
								<button
									className='inner-trans-button row pb-2 ps-4 pe-3 mx-0 my-2 p-0'
									id='inner-trans-btn'
									align='center'
									onClick={() => setTransactionPage('all')}>
									<span className='col'>
										<p>Resep Dokter</p>
									</span>
									<img src={Arrow} className='tr-arrow col my-auto' />
								</button>
							</div>
							:
							null
						}
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
					) : page === 'transaction' && transactionPage === 'ongoing' ? (
						<div className='profile-card border'>
							<OnGoingTransaction />
						</div>
					) : page === 'transaction' && transactionPage === 'all' ? (
						<div className='profile-card border'>
							<UserTransaction />
						</div>
					) : page === 'settings' ? (
						<div className="profile-card border">
							<SettingsComp />
						</div>
					) : page === 'address' ? (
						<div className="profile-card border">
							<AddressComp />
						</div>
					)
						: null}
				</div>
			</div>
		</div>
	);
};
export default Profile;
