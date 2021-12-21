import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PProfile from '../../Supports/Assets/Profile/Profile-placeholder.svg';

export const UserProfile = () => {
	const userProfile = useSelector((state) => state.userDetailReducer);
	const { userDetail } = userProfile;

	console.log(userDetail);

	return (
		<div className='profile-detail-container'>
			<div className='profile-content row'>
				<div className='image-name col-4'>
					{userDetail.profileIMG ?
						<img src={userDetail.profileIMG} />
						:
						<img src={PProfile} />
					}
					{userDetail.name ?
						<h5>{userDetail.name}</h5>
						:
						<h5>Your Name</h5>
					}
					<div className='detail-container row'>
						<div className='age col'>
							<div className='detail-profile-filler'>
								{userDetail.age ? <p>{userDetail.age}</p> : <p>-</p>}
							</div>
							<p>Age</p>
						</div>
						<div className='height col'>
							<div className='detail-profile-filler'>
								{userDetail.height ? <p>{userDetail.height}</p> : <p>-</p>}
							</div>
							<p>Height</p>
						</div>
						<div className='weight col'>
							<div className='detail-profile-filler'>
								{userDetail.weight ? <p>{userDetail.weight}</p> : <p>-</p>}
							</div>
							<p>Weight</p>
						</div>
					</div>
				</div>
				<div className='more-details col'>
					<div className='more-container container'>
						<div className='container1 row'>
							<div className='birthdate col'>
								<h5>Tanggal Lahir</h5>
								<div className='profile-filler'>
									{userDetail.birthday ? <p>{userDetail.birthday}</p> : <p>-</p>}
								</div>
							</div>
							<div className='gender col'>
								<h5>Jenis Kelamin</h5>
								<div className='profile-filler'>
									{userDetail.gender ? <p>{userDetail.gender}</p> : <p>-</p>}
								</div>
							</div>
						</div>
						<div className='container2 mt-4 row'>
							<div className='email col'>
								<h5>Email</h5>
								<div className='profile-filler'>
									{userDetail.email ? <p>{userDetail.email}</p> : <p>-</p>}
								</div>
							</div>
							<div className='phone col'>
								<h5>No Telp</h5>
								<div className='profile-filler'>
									{userDetail.phone ? <p>{userDetail.phone}</p> : <p>-</p>}
								</div>
							</div>
						</div>
						<div className='container3 mt-5'>
							<button>edit profile</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
