import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/ProfileComp.css';

import { AddressCard } from '../Card/AddressCard';
import { ActiveAddressCard } from '../Card/ActiveAddressCard';
import { AddAddressModal } from '../Modals/addAddress';

import noOrder from '../../Supports/Assets/Profile/no-order.svg';

export const AddressComp = () => {

    return (
        <div className='address-container col'>
            <div className='address-header mx-auto row'>
                <p>Alamat</p>
            </div>
            <div className='address-body'>
                <AddAddressModal />
                <ActiveAddressCard />
                <AddressCard />
            </div>
        </div>
    );
};;