import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/NotifComp.css';

import noNotif from '../../Supports/Assets/Profile/no-notification.svg';

export const NotificationComp = () => {
    const [page, setPage] = useState('');

    return (
        <div className='notification-container col'>
            <div className='notification-header mx-auto row'>
                <p>Notifikasi</p>
            </div>
            <div className='notification-body'>
                <img src={noNotif} />
                <h4>
                    <strong>Belum ada transaksi</strong>
                </h4>
                <button>Belanja Sekarang</button>
                {/* <TransactionCard /> */}
            </div>
        </div>
    );
};