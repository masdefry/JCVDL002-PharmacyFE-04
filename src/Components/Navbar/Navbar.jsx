import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Supports/Stylesheets/Components/Navbar.css';

import { PrescriptionModals } from '../Modals/prescriptionModal';
import SehatY from '../../Supports/Assets/Navbar/SehatY.svg';
import Cart from '../../Supports/Assets/Navbar/cart.svg';
import Message from '../../Supports/Assets/Navbar/inbox.svg';
import Profile from '../../Supports/Assets/Navbar/profile.svg';
import Search from '../../Supports/Assets/Navbar/magGlass.svg';
import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin, userLogout } from '../../Redux/Actions/userActions';

export const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const navbar = useSelector((state) => state.userKeepLoginReducer);
	const { userLoginInfo } = navbar;

	const userProfile = useSelector((state) => state.userDetailReducer);
	const { userDetail } = userProfile;

	const onLogout = (e) => {
		e.preventDefault();
		dispatch(userLogout());
		navigate('/login');
	};
	return (
		<div className='Navbar row p-0 m-0'>
			<div className="container">
				<div className='nav-items mx-auto row'>
					<div className='logo col'>
						<Link to='/' >
							<img src={SehatY} alt='logo' />
						</Link>
					</div>
					<div className='search col align-items-center'>
						<img src={Search} alt='' />
						<input type='text' placeholder='Search SehatY' />
					</div>
					<div className='link col-2'>
						{userLoginInfo && userLoginInfo !== undefined ?
							<div className="dropdown-profile">
								<Link to='/cart' >
									<img src={Cart} alt='Cart' />
								</Link>
								<div className="dropdown-content">
									<Link to='/cart'>
										Cart
									</Link>
									<PrescriptionModals />
								</div>
							</div>
							:
							<Link to='/' >
								<img src={Cart} alt='Cart' />
							</Link>
						}
						<Link to='/notification'>
							<img src={Message} alt='Message' />
						</Link>
						{userLoginInfo && userLoginInfo !== undefined ?
							<div className="dropdown-profile" >
								<Link to='profile' className='dropbtn' >
									{userDetail && userDetail.profileImg ?
										<img src={userDetail.profileImg} alt="" />
										:
										<img src={PPlaceholder} alt="" />
									}
								</Link>
								<div className="dropdown-content">
									<Link to='profile' >Profile</Link>
									{userLoginInfo && userLoginInfo.role === 'admin' ?
										<Link to='admin' className='mb-2' >Admin</Link>
										:
										null
									}
									<div className="logout-btn ">
										<button onClick={onLogout}>Logout</button>
									</div>
								</div>
							</div>
							:
							<Link to='login' >
								<img src={Profile} alt="" />
							</Link>
						}
					</div>
				</div>
			</div>
		</div >
	);
};
