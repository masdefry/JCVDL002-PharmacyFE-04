import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Supports/Stylesheets/Components/Cards.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { EditAddressModal } from '../Modals/editAddress';
import { DeleteAddressModal } from '../Modals/DeleteAddress';

import Check from '../../Supports/Assets/Check.svg';

export const ActiveAddressCard = () => {
    const selectedAddress = useSelector((state) => state.activeAddressReducer);
    const { activeAddress } = selectedAddress;
    console.log(activeAddress);

    const [errorMessage, setErrorMessage] = useState('');

    const onSelectHandler = (ID) => {
        try {
            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.patch(`${API_URL}/user/selectAddress`, { ID }, config)
                .then((res) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            setErrorMessage(err);
        }
    };

    const userInfoLocalStorage =
        localStorage.getItem('userInfoToken') ?
            JSON.parse(localStorage.getItem('userInfoToken'))
            :
            null;

    if (!activeAddress || activeAddress === undefined || activeAddress === userInfoLocalStorage) {
        return null;
    }

    return (
        <div className="address-card-container mx-3 my-3">
            <div className="address-card-active-body mx-1 py-3 px-4 shadow-sm row">
                <div className="address-detail col">
                    <p className='mb-1' style={{ fontSize: '0.9rem' }}>{activeAddress.Label}</p>
                    <p className='mb-0' style={{ fontSize: '1.3rem', fontWeight: '400' }}>{activeAddress.Name}</p>
                    <p className='mb-0'>+62 {activeAddress.Phone}</p>
                    <p>{activeAddress.Districts}, {activeAddress.City}, {activeAddress.Province}</p>
                    <p>{activeAddress.Detail}</p>
                </div>
                <div className="address-action col" align='end'>
                    <img src={Check} alt="" />
                </div>
                <div className="edit-address d-flex">
                    <EditAddressModal ID={activeAddress.ID} />
                </div>
            </div>
        </div>
    );
};