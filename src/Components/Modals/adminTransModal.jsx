import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";

import Masker from '../../Supports/Assets/download.jpg';

export const AdminTransactionDetailModal = (props) => {
    const adminPresriptionOrder = useSelector((state) => state.adminPresTransReducer);
    const { adminPresOrder } = adminPresriptionOrder;
    const [openModal, setOpenModal] = useState(false);

    const [totalCost, setTotalCost] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const onSetTotalCost = (orderID) => {
        let totalPrice = totalCost;
        let totalPrdct = totalProduct;
        let ID = orderID;
        try {
            if (!totalPrice || !ID || !totalPrdct) throw { message: 'Data Must Be Filled' };

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.post(`${API_URL}/admin/setCost`, { ID, totalPrice, totalPrdct }, config)
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

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(money);
        return formatMoney;
    };

    console.log('data buat detail modal' + props.data);

    if (adminPresOrder === undefined) {
        return (
            <div className="outer-verif">
                <div className="verif-container d-flex my-5 justify-content-lg-center">
                    <div className="verify-content d-flex flex-column ">
                        <h1>Loading . . .</h1>
                    </div>
                </div>
            </div>
        );
    }
    return (
        adminPresOrder.map((val) => {
            let imgSrc = `http://localhost:2004/${val.Image}`;
            if (val.prescription_ID === props.data.prescription_ID)
                return (
                    <>
                        <button onClick={() => setOpenModal(true)} id="tr-detail-btn" className="mt-0">Transaction Detail</button>
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
                                            <img src={imgSrc} className="border col-3 p-0" />
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
                                        </div>
                                    </div>
                                </div>
                                {val.Status_Name === 'Request' ?
                                    <div className="cost-input">
                                        <form>
                                            <div class="trans-cost-input mb-3">
                                                <label htmlFor="cost-input" className="form-label">Input total yang harus dibayar</label>
                                                <input type="text" className="form-control" id="cost-input" onChange={(e) => setTotalCost(e.target.value)} />
                                                <label htmlFor="cost-input" className="form-label mt-3">Input jumlah barang</label>
                                                <input type="text" className="form-control" id="cost-input" onChange={(e) => setTotalProduct(e.target.value)} />
                                            </div>
                                            <button type="submit" className="admin-total-input d-flex ms-auto" onClick={() => onSetTotalCost(val.prescription_ID)}>Input Total</button>
                                        </form>
                                    </div>
                                    :
                                    <>
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
                                                    <div className="item-shipment-title">
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
                                                    <p className="col">Total Ongkos Kirim (Berat Barang)</p>
                                                    <p className=" text-end col">{format(val.Cost)}</p>
                                                </div>
                                            </div>
                                            <div className="trans-payment-total fw-bolder my-2 row">
                                                <p className="col">Total Bayar</p>
                                                <p className=" text-end col">{format(val.Total_Price + val.Cost + (val.Total_Price * (10 / 100)))}</p>
                                            </div>
                                        </div>
                                    </>
                                }
                            </ModalBody>
                        </Modal>
                    </>
                );
        })
    );
};