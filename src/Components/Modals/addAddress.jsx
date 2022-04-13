import React, { useState, useRef } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
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
        Province: '',
        Districts: '',
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
        if (dataType === 'Districts') {
            setAddAddress({ ...addAddress, Districts: val.target.value });
        }
        if (dataType === 'Province') {
            setAddAddress({ ...addAddress, Province: val.target.value });
        }
    };


    const onSubmitData = () => {
        let Address_Label = addAddress.AddressName;
        let Recipient_Name = addAddress.RecipientName;
        let Recipient_Phone = addAddress.RecipientPhone;
        let City = addAddress.AddressCity;
        let Province = addAddress.Province;
        let Districts = addAddress.Districts;
        let Zip_Code = addAddress.ZipCode;
        let Full_Address = addAddress.AddressDetail;

        try {
            if (!Address_Label || !Districts || !Province || !Recipient_Name || !Recipient_Phone || !City || !Zip_Code || !Full_Address) throw { message: 'Data Must Be Filled' };

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.post(`${API_URL}/user/userAddAddress`, { Address_Label, Recipient_Name, Recipient_Phone, City, Province, Districts, Zip_Code, Full_Address }, config)
                .then((res) => {
                    alert('Add Address Success!');
                    setOpenModal(false);
                    window.location.reload();
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
                <ModalHeader style={{ justifyContent: 'center' }}>
                    <div className="text-center">
                        <strong>Tambah Alamat</strong>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="text-center mt-2 border-dark border-2">
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
                        <div className="pb-3 px-3">
                            <h6>Nama Penerima :</h6>
                            <input
                                placeholder="Nama Penerima"
                                onChange={(val) => onFill(val, 'RecipientName')}
                                name='addRecipientPrice'
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <label className='form-label px-3 ' htmlFor='Phone'>
                            <h6 className='mb-0'>No. Telepon</h6>
                        </label>
                        <div className='input-group pb-3 px-3'>
                            <span className="input-group-text" id="Phone">+62</span>
                            <input
                                type='text'
                                className='form-control'
                                id='Phone'
                                placeholder='Phone'
                                aria-describedby="Phone"
                                onChange={(val) => onFill(val, 'RecipientPhone')}
                            />
                        </div>
                    </div>
                    <div className="province-city justify-content-center px-3 row">
                        <div className="pb-3 ms-1 col">
                            <h6>Provinsi :</h6>
                            <input
                                placeholder="Provinsi"
                                onChange={(val) => onFill(val, 'Province')}
                                name='addAddressCity'
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className="pb-3 ps-0 me-1 col">
                            <h6>Kota :</h6>
                            <input
                                placeholder="Kota"
                                onChange={(val) => onFill(val, 'AddressCity')}
                                name='addZipCode'
                                type='text'
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className="district-state justify-content-center row">
                        <div className="pb-3 col-8">
                            <h6>Kecamatan :</h6>
                            <input
                                placeholder="Kecamatan"
                                onChange={(val) => onFill(val, 'Districts')}
                                name='addAddressCity'
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className="pb-3 pe-2 me-1 ps-0 col-3">
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
                    <div className="pb-3 ps-3 pe-3 ms-1 me-1">
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