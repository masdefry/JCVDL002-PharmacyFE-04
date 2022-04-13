import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import Masker from '../../Supports/Assets/download.jpg';

export const ProductDetailModal = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
        return formatMoney;
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)} id="product-detail-btn" className="mt-0">Details</button>
            <Modal size="lg" toggle={() => setOpenModal(false)} isOpen={openModal} centered>
                <ModalHeader style={{ justifyContent: 'center' }}>
                    <h3>
                        Detail Transaksi
                    </h3>
                </ModalHeader>
                <ModalBody id="detail-modal" style={{ maxHeight: "70vh", overflowY: "auto", padding: '0.8rem 0' }}>
                    <div className="trans-product-shipping">
                        <p className="ms-4 fw-bolder mb-4">Product Details</p>
                        <div className="product-shipping-detail-card mx-4">
                            <div className="item-shipment d-flex">
                                <div className="item-shipment d-flex">
                                    <div className="item-shipment-title">
                                        <p>Image</p>
                                    </div>
                                    <span className="me-4">:</span>
                                    <div className="item-shipment-content">
                                        <img src={props.product.Image} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>Name</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>{props.product.Name}</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>Price</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>{format(props.product.Price)}</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>Quantity</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>{props.product.Qty}</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title">
                                    <p>Category</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>{props.product.Category_ID}</p>
                                </div>
                            </div>
                            <div className="item-shipment d-flex">
                                <div className="item-shipment-title pe-4 me-5">
                                    <p>Description</p>
                                </div>
                                <span className="me-4">:</span>
                                <div className="item-shipment-content">
                                    <p>{props.product.Description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};