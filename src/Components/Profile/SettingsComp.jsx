import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changePassword, usernameUpdate } from "../../Redux/Actions/userActions";
import '../../Supports/Stylesheets/Components/ProfileComp.css';

export const SettingsComp = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userDetailReducer);
    const { userDetail } = userProfile;

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNew, setConfirmNew] = useState('');
    const [username, setUsername] = useState('');

    const passSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPass, newPass));
    };

    const unameSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(usernameUpdate(username));
    };

    return (
        <div className="container p-0">
            <div className="settings-header border-bottom">
                <h3 className="m-0 px-4 py-3">Pengaturan</h3>
            </div>
            <div className="settings-body pt-4 pb-5 px-4 row">
                <div className="password-reset col">
                    <h4 className="px-3 m-0">Ganti password</h4>
                    <form className='form-container d-grid mx-3 mt-3' onSubmit={passSubmitHandler}>
                        <div className='form-group my-2'>
                            <label htmlFor='Old-Password'>Old Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='Old-Email'
                                placeholder='Old Password'
                                onChange={(e) => setOldPass(e.target.value)}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor='New-Password'>New Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='New-Password'
                                placeholder='New Password'
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                            <div className="err">
                                {newPass === '' ?
                                    null
                                    : newPass.length < 8
                                        ? `New password can't be less than 8 character`
                                        : null}
                            </div>
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor='Confirm-New-Password'>Confirm New Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='Confirm-New-Password'
                                placeholder='Confirm Password'
                                onChange={(e) => setConfirmNew(e.target.value)}
                            />
                            <div className="err">
                                {confirmNew === ''
                                    ? null
                                    : confirmNew !== newPass
                                        ? 'Password did not match!'
                                        : null}
                            </div>
                        </div>
                        <button className='submit-btn btn-lg mt-4' type='submit'>
                            Ganti Password
                        </button>
                    </form>
                </div>
                <div className="set-username col">
                    <h4 className="px-3 ">Username</h4>
                    {userDetail.username ?
                        <div className="username mx-3 mt-5">
                            <input type="text"
                                className="form-control text-center text-uppercase fw-bolder"
                                placeholder={userDetail.username}
                                disabled />
                        </div>
                        :
                        <form className="form-containre d-grid mx-3 mt-3" onSubmit={unameSubmitHandler}>
                            <div className='form-group my-2'>
                                <label htmlFor='set-username'>Set Username</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='set-username'
                                    placeholder='Set Username'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <div className="err">
                                    {username === ''
                                        ? null
                                        : username <= 8
                                            ? 'Username has to be 8 character or more'
                                            : null}
                                </div>
                            </div>
                            <button className='submit-btn btn-lg mt-4' type='submit'>
                                Set Username
                            </button>
                        </form>
                    }
                </div>
            </div>
        </div >
    );
};