import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Supports/Stylesheets/Components/Cards.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { EditAddressModal } from '../Modals/editAddress';
import { DeleteAddressModal } from '../Modals/DeleteAddress';

import Check from '../../Supports/Assets/Check.svg';

export const AddressCard = () => {
    const address = useSelector((state) => state.fetchAddressReducer);
    // console.log(address);
    const { userAddress } = address;
    console.log(userAddress);

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
    return (
        userAddress.map((val) => {
            if (val.Status === 'Inactive') {
                return (
                    <div className="address-card-container mx-3 my-3">
                        <div className="address-card-body mx-1 py-3 px-4 shadow-sm row">
                            <div className="address-detail col">
                                <p className='mb-1' style={{ fontSize: '0.9rem' }}>{val.Address_Label}</p>
                                <p className='mb-0' style={{ fontSize: '1.3rem', fontWeight: '400' }}>{val.Recipient_Name}</p>
                                <p className='mb-0'>+62 {val.Recipient_Phone}</p>
                                <p>{val.Districts}, {val.City}, {val.Province}</p>
                                <p>{val.Full_Address}</p>
                            </div>
                            <div className="address-action col" align='end'>
                                <button
                                    onClick={() => onSelectHandler(val.ID)}
                                >Pilih</button>
                            </div>
                            <div className="edit-address d-flex">
                                <EditAddressModal ID={val.ID} />
                                <DeleteAddressModal data={{ val }} />
                            </div>
                        </div>
                    </div>
                );
            }
        })
    );
};