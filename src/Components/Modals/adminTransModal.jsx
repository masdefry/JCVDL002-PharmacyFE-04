import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import Masker from '../../Supports/Assets/download.jpg';

export const AdminTransactionDetailModal = () => {

    const [openModal, setOpenModal] = useState(false);
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
                        <p className="trans-status-status fw-bolder mb-2">Selesai</p>
                        <div className="trans-date justify-content-between row text-muted">
                            <p className="col">Tanggal Pembelian</p>
                            <p className=" text-end col">27 Desember 2021, 19:11 WIB</p>
                        </div>
                    </div>
                    <div className="trans-product-detail-card my-3">
                        <p className="ms-4 fw-bolder">Detail Produk</p>
                        <div className="detail-produk-card d-flex">
                            <div className="detail-produk-card-img d-flex">
                                <img src={Masker} className="border col-3 p-0" />
                                <span className="ms-3">
                                    <p className="m-0 fw-bolder">Nama Barang</p>
                                    <p className="m-0">Jumlah barang X harga barang</p>
                                </span>
                            </div>
                            <div className="detail-produk-total flex-column ms-auto">
                                <div className="detail-produk-total-total">
                                    <p className="text-muted mb-0 text-end">Total Belanja</p>
                                    <p className="mb-0 text-end"><strong>Rp.25.000</strong></p>
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
                                    <p>JNE Reguler</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>No Resi</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>TKP99-TPT897NGG</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>Alamat</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content flex-column">
                                    <h6>Nama Penerima</h6>
                                    <p>Nomor Telepon <br />
                                        Alamat Lengkap Penerima <br />
                                        Kota Penerima <br />
                                        Kode Penerima
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trans-payment-card my-3 px-5">
                        <p className="trans-payment-title fw-bolder mb-2">Rincian Pembayaran</p>
                        <div className="trans-payment-item-card">
                            <div className="trans-payment-item justify-content-between row text-muted">
                                <p className="col">Total Harga (Jumlah Barang)</p>
                                <p className=" text-end col">Rp. Harga Barang</p>
                            </div>
                            <div className="trans-payment-item justify-content-between row text-muted">
                                <p className="col">Pajak(10%)</p>
                                <p className=" text-end col">Rp. Total Harga x 10%</p>
                            </div>
                            <div className="trans-payment-item justify-content-between row text-muted">
                                <p className="col">Total Ongkos Kirim (Berat Barang)</p>
                                <p className=" text-end col">Rp. Total ongkos kirim</p>
                            </div>
                        </div>
                        <div className="trans-payment-total fw-bolder my-2 row">
                            <p className="col">Total Bayar</p>
                            <p className=" text-end col">Rp. Total Pembayaran</p>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};