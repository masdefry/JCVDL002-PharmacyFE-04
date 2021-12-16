import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PProfile from '../../Supports/Assets/Profile/Profile-placeholder.svg';

export const UserProfile = () => {
	return (
		<div className='profile-detail-container'>
			<div className='profile-content row'>
				<div className='image-name col-4'>
					<img src={PProfile} />
					<h5>Your Name</h5>
					<div className='detail-container row'>
						<div className='age col'>
							<div className='profile-filler'>
								<p>-</p>
							</div>
							<p>Age</p>
						</div>
						<div className='height col'>
							<div className='profile-filler'>
								<p>-</p>
							</div>
							<p>Height</p>
						</div>
						<div className='weight col'>
							<div className='profile-filler'>
								<p>-</p>
							</div>
							<p>Weight</p>
						</div>
					</div>
				</div>
				<div className='more-details col'>
					<div className='more-container container'>
						<div className='container1 row'>
							<div className='birthdate col'>
								<p>Tanggal Lahir</p>
								<div className='profile-filler'>
									<p>-</p>
								</div>
							</div>
							<div className='gender col'>
								<p>Jenis Kelamin</p>
								<div className='profile-filler'>
									<p>-</p>
								</div>
							</div>
						</div>
						<div className='container2 row'>
							<div className='email col'>
								<p>Email</p>
								<div className='profile-filler'>
									<p>-</p>
								</div>
							</div>
							<div className='phone col'>
								<p>No. Telepon</p>
								<div className='profile-filler'>
									<p>-</p>
								</div>
							</div>
						</div>
						<div className='container3'>
							<button>edit profile</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
