import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profileDetail, userProfileUpdate } from '../../Redux/Actions/userActions';
import { CropImageModal } from '../Modals/cropModal';

import PProfile from '../../Supports/Assets/Profile/Profile-placeholder.svg';

export const UserProfile = (props) => {
	const dispatch = useDispatch();
	const imageInput = useRef();

	const [name, setName] = useState('');
	const [page, setPage] = useState('profile');
	const [gender, setGender] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [phone, setPhone] = useState(0);
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [image, setImage] = useState(null);

	console.log(props.profiledata.userDetail);

	useEffect(() => {
		setPage('profile');
	}, [props]);

	const editHandler = (e) => {
		e.preventDefault();
		dispatch(userProfileUpdate(
			name,
			gender,
			birthDate,
			phone,
			weight,
			height
		));
	};

	let age = 0;
	if (props.profiledata.userDetail.birthday) {
		const birth = props.profiledata.userDetail.birthday;
		let birthArr = birth.split('-');
		let birthDates = parseInt(birthArr[2]);

		let date = new Date();
		let compareDate = date.getFullYear();

		age = compareDate - birthDates;
	}

	const dateHandler = (e) => {
		e.preventDefault();
		const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

		let dateString = e.target.value;
		let dateBirth = new Date(dateString);
		let year = dateBirth.getFullYear();
		let month = months[dateBirth.getMonth()];
		let date = dateBirth.getDate();

		setBirthDate(`${date} - ${month} - ${year}`);
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
						<div className='detail-container mt-4 row'>
							{props.profiledata.userDetail.name ?
								<h5><strong>{props.profiledata.userDetail.name.toUpperCase()}</strong></h5>
								:
								<h5>Your Name</h5>
							}
							<p className='m-0 text-muted'>Profil Utama</p>
							<div className='age col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.birthday ? <p>{age}</p> : <p>-</p>}
								</div>
								<p>Umur</p>
							</div>
							<div className='height col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.height ? <p>{props.profiledata.userDetail.height}</p> : <p>-</p>}
								</div>
								<p>Tinggi (Cm)</p>
							</div>
							<div className='weight col'>
								<div className='detail-profile-filler'>
									{props.profiledata.userDetail.weight ? <p>{props.profiledata.userDetail.weight}</p> : <p>-</p>}
								</div>
								<p>Berat (Kg)</p>
							</div>
						</div>
					</div>
					<div className='more-details col-8'>
						<div className='more-container container m-0 row'>
							<div className='container1 col'>
								<div className='birthdate row'>
									<p>Tanggal Lahir</p>
									<div className='profile-filler'>
										{props.profiledata.userDetail.birthday ? <p>{props.profiledata.userDetail.birthday}</p> : <p>-</p>}
									</div>
								</div>
								<div className='gender pt-4 mt-5 row'>
									<p>Jenis Kelamin</p>
									<div className='profile-filler'>
										{props.profiledata.userDetail.gender ? <p>{props.profiledata.userDetail.gender.toUpperCase()}</p> : <p>-</p>}
									</div>
								</div>
							</div>
							<div className='container2 col'>
								<div className='email row'>
									<p>Email</p>
									<div className='profile-filler'>
										{props.profiledata.userDetail.email ? <p>{props.profiledata.userDetail.email}</p> : <p>-</p>}
									</div>
								</div>
								<div className='phone pt-4 mt-5 row'>
									<p>No. Telepon</p>
									<div className='profile-filler'>
										{props.profiledata.userDetail.phone ? <p>+62 {props.profiledata.userDetail.phone}</p> : <p>-</p>}
									</div>
								</div>
							</div>
							<div className='container3'>
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
							<div className="upload-button d-flex">
								<CropImageModal />
								{/* <input
									style={{ display: 'none' }}
									type="file"
									ref={imageInput} />
								<button
									onClick={() => imageInput.current.click()}
									className='submit-btn btn-lg mx-auto mt-4'
								>Upload Image</button> */}
							</div>
						</div>
						<div className="profile-detail mb-3 ps-5 mx-5 col">
							<form className='form-container d-grid mx-3' onSubmit={editHandler}  >
								<label className='mb-2' htmlFor='Name'>
									Nama
								</label>
								<input
									type='text'
									className='form-control mb-4'
									id='Name'
									placeholder='Nama Lengkap'
									onChange={(e) => setName(e.target.value)}
								/>
								<label className='mb-2' htmlFor='Gender'>
									Jenis Kelamin
								</label>
								<select
									onChange={(e) => setGender(e.target.value)}
									name="addPrdctCategory"
									className="form-control mb-3"
								>
									<option value="" hidden>Jenis Kelamin</option>
									<option value="Laki-laki">Laki laki</option>
									<option value="Perempuan">Perempuan</option>
								</select>
								<label className='mb-1 mt-2' htmlFor='birthDate'>
									Birthday
								</label>
								<input
									type='date'
									className='form-control mb-3'
									id='birthDate'
									onChange={(e) => dateHandler(e)}
								/>
								<label className='form-label mt-2 mb-1' htmlFor='Phone'>
									Phone
								</label>
								<div className='input-group mb-3'>
									<span className="input-group-text" id="Phone">+62</span>
									<input
										type='text'
										className='form-control'
										id='Phone'
										placeholder='Phone'
										aria-describedby="Phone"
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
								<label className='mt-2 mb-1' htmlFor='Weight'>
									Berat
								</label>
								<div className='input-group mb-3'>
									<input
										type='number'
										className='form-control'
										id='Weight'
										placeholder='Berat badan'
										onChange={(e) => setWeight(e.target.value)}
									/>
									<span className="input-group-text" id="Weight">Kg</span>
								</div>
								<label className='mt-2 mb-1' htmlFor='Height'>
									Tinggi
								</label>
								<div className='input-group mb-3'>
									<input
										type='number'
										className='form-control'
										id='Height'
										placeholder='Tinggi badan'
										onChange={(e) => setHeight(e.target.value)}
									/>
									<span className="input-group-text" id="Height">Cm</span>
								</div>
								<button className='submit-btn btn-lg mt-5' type='submit'>
									Update Data
								</button>
							</form>
						</div>
					</div>
				</div >
			}
		</div >
	);
};
