import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { profileDetail } from '../../Redux/Actions/userActions';

import PProfile from '../../Supports/Assets/Profile/Profile-placeholder.svg';

export const UserProfile = (props) => {

	const [page, setPage] = useState('profile');
	const [gender, setGender] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [phone, setPhone] = useState(0);
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);

	console.log(props.profiledata.userDetail);

	const editHandler = (e) => {
		e.preventDefault();

	};

	return (
		<div className='profile-detail-container container'>
			{page === 'profile' ?
				<div className='profile-content row'>
					<div className='image-name col-4'>
						{props.profiledata.userDetail.profileImg ?
							<img src={props.profiledata.userDetail.profileImg} />
							:
							<img src={PProfile} />
						}
						{props.profiledata.userDetail.name ?
							<h5>{props.profiledata.userDetail.name}</h5>
							:
							<h5>Your Name</h5>
						}
						<div className='detail-container row'>
							<div className='age col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.age ? <p>{props.profiledata.userDetail.age}</p> : <p>-</p>}
								</div>
								<p>Age</p>
							</div>
							<div className='height col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.height ? <p>{props.profiledata.userDetail.height}</p> : <p>-</p>}
								</div>
								<p>Height</p>
							</div>
							<div className='weight col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.weight ? <p>{props.profiledata.userDetail.weight}</p> : <p>-</p>}
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
										{props.profiledata.userDetail.birthday ? <p>{props.profiledata.userDetail.birthday}</p> : <p>-</p>}
									</div>
								</div>
								<div className='gender col'>
									<h5>Jenis Kelamin</h5>
									<div className='profile-filler'>
										{props.profiledata.userDetail.gender ? <p>{props.profiledata.userDetail.gender}</p> : <p>-</p>}
									</div>
								</div>
							</div>
							<div className='container2 mt-4 row'>
								<div className='email col'>
									<h5>Email</h5>
									<div className='profile-filler'>
										{props.profiledata.userDetail.email ? <p>{props.profiledata.userDetail.email}</p> : <p>-</p>}
									</div>
								</div>
								<div className='phone col'>
									<h5>No Telp</h5>
									<div className='profile-filler'>
										{props.profiledata.userDetail.phone ? <p>{props.profiledata.userDetail.phone}</p> : <p>-</p>}
									</div>
								</div>
							</div>
							<div className='container3 mt-5'>
								<button onClick={() => setPage('edit')}>edit profile</button>
							</div>
						</div>
					</div>
				</div>
				:
				<div className="edit-profile-container">
					<div className="edit-profile-content row">
						<div className="profile-img-upload col-4">
							<div className="edit-profile-img">
								{props.profiledata.userDetail.profileImg ?
									<img src={props.profiledata.userDetail.profileImg} />
									:
									<img src={PProfile} />
								}
							</div>
							<div className="upload-buttton d-flex">
								<button className='submit-btn btn-lg mx-auto mt-4'>Upload Image</button>
							</div>
						</div>
						<div className="profile-detail col">
							<form className='form-container d-grid mx-3'  >
								<div className='form-group my-3'>
									<label className='mb-2' htmlFor='Gender'>
										Jenis Kelamin
									</label>
									<select
										onChange={(e) => setGender(e.target.value)}
										name="addPrdctCategory"
										className="form-control"
									>
										<option value="" hidden>Jenis Kelamin</option>
										<option value="man">Laki laki</option>
										<option value="woman">Perempuan</option>
									</select>
								</div>
								<div className='form-group my-3'>
									<label className='mb-2' htmlFor='birthDate'>
										Birthday
									</label>
									<input
										type='date'
										className='form-control'
										id='birthDate'
										onChange={(e) => setBirthDate(e.target.value)}
									/>
								</div>
								<label className='form-label mt-2' for='Phone'>
									Phone
								</label>
								<div class='input-group mb-3'>
									<span class="input-group-text" id="Phone">+62</span>
									<input
										type='text'
										className='form-control'
										id='Phone'
										placeholder='Phone'
										aria-describedby="Phone"
										onChange={(e) => setPhone(0 + e.target.value)}
									/>
								</div>
								<label className='mt-2 mb-1' for='Weight'>
									Berat
								</label>
								<div class='input-group mb-3'>
									<input
										type='number'
										className='form-control'
										id='Weight'
										placeholder='Berat badan'
										onChange={(e) => setWeight(e.target.value)}
									/>
									<span class="input-group-text" id="Weight">Kg</span>
								</div>
								<label className='mt-2 mb-1' for='Height'>
									Tinggi
								</label>
								<div class='input-group mb-3'>
									<input
										type='number'
										className='form-control'
										id='Height'
										placeholder='Tinggi badan'
										onChange={(e) => setHeight(e.target.value)}
									/>
									<span class="input-group-text" id="Height">Cm</span>
								</div>
								<button className='submit-btn btn-lg mt-5' type='submit'>
									Tambah Data
								</button>
							</form>
						</div>
					</div>
				</div>
			}
		</div>
	);
};
