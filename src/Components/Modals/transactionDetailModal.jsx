import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { API_URL } from "../../Supports/Constants/UrlAPI";
import Axios from "axios";

import Masker from '../../Supports/Assets/download.jpg';

export const TransactionDetailModal = (props) => {
    const imageInput = useRef();
    const presriptionOrder = useSelector((state) => state.userPrescriptionTransReducer);
    const { presOrderUser } = presriptionOrder;

    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesErrorMessage, setImagesErrorMessage] = useState('');

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
        return formatMoney;
    };

    const onImagesValidation = (e) => {
        const files = e.target.files;
        console.log(files);
        try {
            if (files.length > 1) throw { message: 'Select 1 Images Only!' };

            if (files[0].size > 100000000) throw { message: `${files[0].name} More Than 1Mb` };

            setImages([...files]);
            setImagesErrorMessage('');

        } catch (error) {
            setImagesErrorMessage(error.message);
        }
    };

    const PaymentProof = (ID) => {
        try {
            if (!ID) throw { message: 'Theres no ID data' };
            if (!images) throw { message: 'Select Images First!' };

            let data = {
                ID,
            };
            console.log(typeof ({ data }));

            let dataToSend = JSON.stringify(data);
            console.log(dataToSend);

            let fd = new FormData();
            fd.append('data', dataToSend);
            fd.append('Image', images[0]);

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            console.log([...fd]);
            Axios.post(`${API_URL}/admin/orderPresription`, fd, config)
                .then((res) => {
                    alert('Bukti pembayaran terkirim!');
                    setOpenModal(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            setImagesErrorMessage(`Ini pas mau post ${error.message}`);
            console.log(error);
            console.log(error.message);
        }
    };

    return (presOrderUser.map((val) => {
        if (val.prescription_ID === props.data.prescription_ID) {
            let imageSrc = `http://localhost:2004/${val.Image}`;
            return (
                <>
                    <button onClick={() => setOpenModal(true)} id="tr-detail-btn" className="mt-0">Lihat Detail Transaksi</button>
                    <Modal size="lg" toggle={() => setOpenModal(false)} isOpen={openModal} centered>
                        <ModalHeader style={{ justifyContent: 'center' }}>
                            <h3>
                                Detail Transaksi
                            </h3>
                        </ModalHeader>
                        <ModalBody id="detail-modal" style={{ maxHeight: "70vh", overflowY: "auto", padding: '0.8rem 0' }}>
                            <div className="trans-status-card">
                                <p className="trans-status-status fw-bolder mb-2">{val.Status_Name}</p>
                                <div className="trans-date justify-content-between row text-muted">
                                    <p className="col">Tanggal Pembelian</p>
                                    <p className=" text-end col">{val.Created_At}</p>
                                </div>
                            </div>
                            <div className="trans-product-detail-card my-3">
                                <p className="ms-4 fw-bolder">Detail Produk</p>
                                <div className="detail-produk-card d-flex">
                                    <div className="detail-produk-card-img d-flex">
                                        <img src={imageSrc} className="border col-3 p-0" />
                                        <span className="ms-3">
                                            <p className="m-0 fw-bolder">Resep Dokter</p>
                                            <p className="m-0">{format(val.Total_Price)}</p>
                                        </span>
                                    </div>
                                    <div className="detail-produk-total flex-column ms-auto">
                                        <div className="detail-produk-total-total">
                                            <p className="text-muted mb-0 text-end">Total Belanja</p>
                                            <p className="mb-0 text-end"><strong>{format(val.Total_Price)}</strong></p>
                                        </div>
                                        <div className="detail-produk-repeat-btn mt-2">
                                            <button>Beli Lagi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trans-product-shipping">
                                <p className="ms-4 fw-bolder">Info Pengiriman</p>
                                <div className="product-shipping-detail-card mx-4">
                                    <div className="item-shipment d-flex">
                                        <div className="item-shipment-title">
                                            <p>Kurir</p>
                                        </div>
                                        <span className="me-4">:</span>
                                        <div className="item-shipment-content">
                                            <p>{val.Shipping_Provider}, {val.Method}</p>
                                        </div>
                                    </div>
                                    <div className="item-shipment d-flex">
                                        <div className="item-shipment-title">
                                            <p>No Resi</p>
                                        </div>
                                        <span className="me-4">:</span>
                                        <div className="item-shipment-content">
                                            <p>{val.Shipping_Code}</p>
                                        </div>
                                    </div>
                                    <div className="item-shipment d-flex">
                                        <div className="item-shipment-title me-3">
                                            <p>Alamat</p>
                                        </div>
                                        <span className="me-4">:</span>
                                        <div className="item-shipment-content flex-column">
                                            <h6>{val.Recipient_Name}</h6>
                                            <p>{val.Recipient_Phone}<br />
                                                {val.Full_Address} <br />
                                                {val.City} <br />
                                                {val.Zip_Code}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trans-payment-card my-3 px-5">
                                <p className="trans-payment-title fw-bolder mb-2">Rincian Pembayaran</p>
                                <div className="trans-payment-item-card">
                                    <div className="trans-payment-item justify-content-between row text-muted">
                                        <p className="col">Total Harga ({val.Order_Qty} Barang)</p>
                                        <p className=" text-end col">{format(val.Total_Price)}</p>
                                    </div>
                                    <div className="trans-payment-item justify-content-between row text-muted">
                                        <p className="col">Pajak(10%)</p>
                                        <p className=" text-end col">{format(val.Total_Price * (10 / 100))}</p>
                                    </div>
                                    <div className="trans-payment-item justify-content-between row text-muted">
                                        <p className="col">Total Ongkos Kirim </p>
                                        <p className=" text-end col">{format(val.Cost)}</p>
                                    </div>
                                </div>
                                <div className="trans-payment-total fw-bolder my-2 row">
                                    <p className="col">Total Bayar</p>
                                    <p className=" text-end col">{format(val.Total_Price + val.Cost + (val.Total_Price * (10 / 100)))}</p>
                                </div>
                            </div>
                            {val.Status_Name === 'Upload Bukti Pembayaran' ?
                                <div className="trans-unpaid-card my-3 px-5">
                                    <p className="trans-unpaid-title fw-bolder mb-2">Segera Bayar</p>
                                    <div className="trans-unpaid-item d-flex">
                                        <div className="item-unpaid-title">
                                            <p>Metode Pembayaran</p>
                                        </div>
                                        <span className="me-4">:</span>
                                        <div className="item-shipment-content">
                                            <p>{val.Payment_Type}</p>
                                        </div>
                                    </div>
                                    <div className="trans-unpaid-item d-flex">
                                        <div className="item-unpaid-title">
                                            <p>Virtual Account</p>
                                        </div>
                                        <span className="me-4">:</span>
                                        <div className="item-shipment-content">
                                            <p>{val.Virtual_Account}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h6>Masukkan Foto Bukti Pembayaran :</h6>
                                    </div>
                                    <div className="row border py-3 mx-1 mb-3 rounded">
                                        <div className="col-6">
                                            <div>
                                                <input
                                                    onChange={onImagesValidation}
                                                    accept="image/*"
                                                    name='addPrdctImage'
                                                    type='file'
                                                    className='form-control'
                                                    ref={imageInput}
                                                    style={{ display: 'none' }}
                                                />
                                                <button
                                                    onClick={() => imageInput.current.click()}
                                                    className='add-submit-btn btn-lg'
                                                >Add Image</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send-payment-proof d-flex justify-content-end">
                                        <button onClick={() => PaymentProof(val.prescription_ID)}>Kirim</button>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </ModalBody>
                    </Modal>
                </>
            );
        }
    })
    );
};