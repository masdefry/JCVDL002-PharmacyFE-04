import React from 'react';
import '../../Supports/Stylesheets/Pages/Profile.css';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';

const Profile = () => {
	return (
		<div className='profile-container m-5'>
			<div className='row'>
				<div className='profile-card shadow p-3 col-3'>
					<div className='mini-profile row m-0'>
						<img src={PPlaceholder} alt='' className='col-2' />
						<div className='mini-detail p-2 col-6'>
							<h4>Dimas Aristyo</h4>
							<p>dearistyo@gmail.com</p>
							<a href='/profile-detail'>
								<em>Lihat profile</em>
							</a>
						</div>
					</div>
					<div className='transaction-container p-3'>
						<a href='/transaction' className='align-items-center row'>
							<img src={Transaction} className='tr-wallet col' />
							<h6 className='col align-items-center'>
								<strong>Transaction</strong>
							</h6>
							<img src={Arrow} className='tr-arrow col offset-md-3' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Profile;
