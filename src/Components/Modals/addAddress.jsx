import React, { useState, useRef } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

export const AddAddressModal = () => {

    const imageInput = useRef();

    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [addAddress, setAddAddress] = useState({
        AddressName: '',
        RecipientName: '',
        RecipientPhone: 0,
        AddressCity: '',
        ZipCode: 0,
        AddressDetail: ''
    });

    const onFill = (val, dataType) => {
        if (dataType === 'AddressName') {
            setAddAddress({ ...addAddress, AddressName: val.target.value });
        }
        if (dataType === 'RecipientName') {
            setAddAddress({ ...addAddress, RecipientName: val.target.value });
        }
        if (dataType === 'RecipientPhone') {
            setAddAddress({ ...addAddress, RecipientPhone: val.target.value });
        }
        if (dataType === 'AddressCity') {
            setAddAddress({ ...addAddress, AddressCity: val.target.value });
        }
        if (dataType === 'ZipCode') {
            setAddAddress({ ...addAddress, ZipCode: val.target.value });
        }
        if (dataType === 'AddressDetail') {
            setAddAddress({ ...addAddress, AddressDetail: val.target.value });
        }
    };


    const onSubmitData = () => {
        let Address_Label = addAddress.AddressName;
        let Recipient_Name = addAddress.RecipientName;
        let Recipient_Phone = addAddress.RecipientPhone;
        let City = addAddress.AddressCity;
        let Zip_Code = addAddress.ZipCode;
        let Full_Address = addAddress.AddressDetail;

        try {
            if (!Address_Label || !Recipient_Name || !Recipient_Phone || !City || !Zip_Code || !Full_Address) throw { message: 'Data Must Be Filled' };

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            Axios.post(`${API_URL}/user/userAddAddress`, { Address_Label, Recipient_Name, Recipient_Phone, City, Zip_Code, Full_Address }, config)
                .then((res) => {
                    alert('Add Address Success!');
                    setOpenModal(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)} className='add-address-btn mt-4 mx-4'>+Tambah Alamat</button>
            <Modal toggle={() => setOpenModal(false)} isOpen={openModal} centered>
                <ModalBody>
                    <div className="text-center mt-2 border-dark border-2">
                        <h3>
                            <strong>Tambah Alamat</strong>
                        </h3>
                        {errorMessage !== '' ?
                            <p className='text-danger p-0 m-0 my-2'>{errorMessage}</p>
                            :
                            null
                        }
                    </div>
                    <div className="mt-4 mx-1 pb-3 px-3">
                        <h6>Label Alamat :</h6>
                        <input
                            placeholder="Label Alamat"
                            onChange={(val) => onFill(val, 'AddressName')}
                            name='addAddressName'
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className="name-phone mx-1 row">
                        <div className="pb-3 px-3 col-7">
                            <h6>Nama Penerima :</h6>
                            <input
                                placeholder="Nama Penerima"
                                onChange={(val) => onFill(val, 'RecipientName')}
                                name='addRecipientPrice'
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className="pb-3 ps-0 col-5">
                            <h6>No. Telp :</h6>
                            <input
                                placeholder="No. Telp"
                                onChange={(val) => onFill(val, 'RecipientPhone')}
                                name='addRecipientPhone'
                                type='number'
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className="city-state justify-content-center row">
                        <div className="pb-3 col-8">
                            <h6>Kota atau Kecamatan :</h6>
                            <input
                                placeholder="Kota atau Kecamatan"
                                onChange={(val) => onFill(val, 'AddressCity')}
                                name='addAddressCity'
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className="pb-3 ps-0 col-3">
                            <h6>Kode Pos :</h6>
                            <input
                                placeholder="Kode Pos"
                                onChange={(val) => onFill(val, 'ZipCode')}
                                name='addZipCode'
                                type='number'
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className="pb-3 px-3 mx-1">
                        <h6>Detail alamat :</h6>
                        <textarea
                            className="form-control"
                            placeholder="Detail Alamat"
                            maxLength='200'
                            style={{ height: '100px' }}
                            onChange={(val) => onFill(val, 'AddressDetail')}
                        ></textarea>
                    </div>
                    <div className="my-4 mx-4">
                        <input type="button" value="Submit Data" onClick={onSubmitData} className="product-submit-btn py-1 w-100" />
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};