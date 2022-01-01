import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/ProfileComp.css';

import noOrder from '../../Supports/Assets/Profile/no-order.svg';

export const AddressComp = () => {

    return (
        <div className='transaction-container col'>
            <div className='transaction-header mx-auto row'>
                <p>Alamat</p>
            </div>
            <div className='transaction-body'>
                <img src={noOrder} />
                <h4>
                    <strong>Belum ada transaksi</strong>
                </h4>
                <button>Belanja Sekarang</button>
            </div>
        </div>
    );
};