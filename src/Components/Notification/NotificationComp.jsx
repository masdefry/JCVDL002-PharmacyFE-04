import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/NotifComp.css';

import noNotif from '../../Supports/Assets/Profile/no-notification.svg';
import { useNavigate } from 'react-router-dom';

export const NotificationComp = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState('');

    const token = localStorage.getItem('userInfoToken');
    useEffect(() => {
        if (token) {
            navigate('/notification');
        }
        if (!token) {
            navigate('/login');
        }
    }, []);

    return (
        <div className='notification-container col border'>
            <div className='notification-header mx-auto row text-center'>
                <p>Notifikasi</p>
            </div>
            <div className='notification-body'>
                <div className="no-notif d-flex flex-column align-items-center text-center py-5">
                    <img src={noNotif} />
                    <p>
                        <strong>Belum ada notifikasi</strong>
                    </p>
                </div>

            </div>
        </div>
    );
};