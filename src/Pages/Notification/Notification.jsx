import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../Supports/Stylesheets/Pages/Notif.css';

import { UserTransaction } from '../../Components/Profile/userTransaction/userTransaction';
import { OnGoingTransaction } from '../../Components/Profile/userTransaction/onGoingTransaction';
import { UserProfile } from '../../Components/Profile/userProfile';
import { SettingsComp } from '../../Components/Profile/SettingsComp';
import { AddressComp } from '../../Components/Profile/AddressComp';
import { keepLogin, profileDetail } from '../../Redux/Actions/userActions';
import { NotificationComp } from "../../Components/Notification/NotificationComp";

import Notif from '../../Supports/Assets/Profile/notif-slim.svg';
import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';
import Settings from '../../Supports/Assets/Profile/cog.svg';
import address from '../../Supports/Assets/Profile/address-slim.svg';

const Notification = () => {
    const navigate = useNavigate();

    const userProfile = useSelector((state) => state.userDetailReducer);
    const { userDetail } = userProfile;
    console.log('data user' + JSON.stringify(userDetail));

    const [page, setPage] = useState('profile');
    const [transactionPage, setTransactionPage] = useState('ongoing');

    const token = localStorage.getItem('userInfoToken');

    useEffect(() => {
        if (token && userDetail) {
            navigate('/notification');
        } else if (!token && userDetail === undefined) {
            navigate('/login');
        }

    }, []);

    return (
        <div className='notification-container container'>
            <div className='row'>
                <div className='profile-selection col-9 ms-5'>
                    {page === 'notification' ? (
                        <NotificationComp />
                    ) : page === 'transaction' && transactionPage === 'ongoing' ? (
                        <div className='profile-card border'>
                            <OnGoingTransaction />
                        </div>
                    ) : page === 'transaction' && transactionPage === 'all' ? (
                        <div className='profile-card border'>
                            <UserTransaction />
                        </div>
                    )
                        : null}
                </div>
                <div className='mini-notification-card shadow px-0 col h-100 me-2'>
                    <div className='button-container '>
                        <button
                            className='notif-button row px-1 mx-0 mt-3 mb-2 p-0'
                            align='center'
                            onClick={() => setPage('notification')}>
                            <img src={Notif} className='notif-bell col' />
                            <span className='col ps-3'>
                                <strong>Notifikasi</strong>
                            </span>
                        </button>
                        <button
                            className={page === 'transaction' ? 'trans-button row px-1 mx-0 mt-3 mb-2 p-0' : 'trans-button row px-1 mx-0 my-3 p-0'}
                            align='center'
                            onClick={() => setPage('transaction')}>
                            <img src={Transaction} className='tr-wallet col' />
                            <span className='col'>
                                <strong>Transaksi</strong>
                            </span>
                        </button>
                        {page === 'transaction' ?
                            <div className="inner-transaction" id='inner-trans'>
                                <button
                                    className='inner-trans-button row pt-2 ps-4 pe-3 mx-0 my-2 p-0'
                                    id='inner-trans-btn'
                                    align='center'
                                    onClick={() => setTransactionPage('ongoing')}>
                                    <span className='col'>
                                        <p>Berlangsung</p>
                                    </span>
                                </button>
                                <button
                                    className='inner-trans-button row pb-2 ps-4 pe-3 mx-0 mt-2 p-0'
                                    id='inner-trans-btn'
                                    align='center'
                                    onClick={() => setTransactionPage('all')}>
                                    <span className='col'>
                                        <p>Semua</p>
                                    </span>
                                </button>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Notification;