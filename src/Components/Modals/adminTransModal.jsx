import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";

import Masker from '../../Supports/Assets/download.jpg';

export const AdminTransactionDetailModal = (props) => {
    const adminPresriptionOrder = useSelector((state) => state.adminPresTransReducer);
    const { adminPresOrder } = adminPresriptionOrder;
    const [openModal, setOpenModal] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [productReq, setProductReq] = useState({
        product_Name: '',
        product_SKU: 0,
        reqQty: 0,
        reqPrice: 0
    });

    const [reqProduct, setReqProduct] = useState([]);

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        productList.map((val) => {
            if (val.SKU === Number(productReq.product_SKU)) {
                setProductReq({ ...productReq, product_Name: val.Name });
            }
        });
    }, [productReq.product_SKU]);

    useEffect(() => {
        if (productReq.product_SKU !== 0) {
            productList.map((val) => {
                if (val.SKU === Number(productReq.product_SKU)) {
                    if (val.Category_ID === 'Tablet') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                    if (val.Category_ID === 'Kapsul') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                    if (val.Category_ID === 'Sirup') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                    if (val.Category_ID === 'Obat tetes') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                    if (val.Category_ID === 'Salep') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                    if (val.Category_ID === 'Serbuk') {
                        setProductReq({ ...productReq, reqPrice: ((productReq.reqQty) * val.Price) });
                    }
                }
            });
        }
    }, [productReq.reqQty]);

    console.log(productReq.product_SKU);
    console.log(reqProduct);
    console.log(totalPrice);

    const onAddReq = (e) => {
        e.preventDefault();
        if (productReq.product_SKU !== 0) {
            productList.map((val) => {
                if (val.SKU === Number(productReq.product_SKU)) {
                    if (val.Category_ID === 'Tablet') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 20) * val.Price));
                    }
                    if (val.Category_ID === 'Kapsul') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 20) * val.Price));
                    }
                    if (val.Category_ID === 'Sirup') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 200) * val.Price));
                    }
                    if (val.Category_ID === 'Obat tetes') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 10) * val.Price));
                    }
                    if (val.Category_ID === 'Salep') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 10) * val.Price));
                    }
                    if (val.Category_ID === 'Serbuk') {
                        setTotalPrice(prev => prev + ((productReq.reqQty / 10) * val.Price));
                    }
                }
            });
        }
        setReqProduct([...reqProduct, productReq]);
    };

    const fetchProduct = () => {
        Axios.get(`${API_URL}/admin/fetchProduct`)
            .then((result) => {
                setProductList(result.data.data);
                // console.table(result.data.data);
            })
            .catch(() => {
                alert('fetchProduct gagal');
            });
    };

    const onSetTotalCost = (orderID) => {
        let totalCost = totalPrice;
        let totalPrdct = reqProduct.length;
        let ID = orderID;
        let forUpdate = reqProduct;
        try {
            if (!totalCost || !ID || !totalPrdct) throw { message: 'Data Must Be Filled' };

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.post(`${API_URL}/admin/setCost`, { ID, totalCost, totalPrdct, forUpdate }, config)
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
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
        return formatMoney;
    };

    const skuQuantity = useMemo(() => {
        if (productList.length < 1) return 0;
        console.log(productReq);
        const selectedSku = productList.find((i) => i.SKU === Number(productReq.product_SKU));
        console.log('ciaw', selectedSku);
        return selectedSku ? <p>{selectedSku.Qty} {selectedSku.Category_Value}</p> : 0;
    }, [productReq.product_SKU, productList]);

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
                                            <div class="trans-cost-input d-flex mb-3">
                                                <div className="addReqProduct w-25">
                                                    <h6>Select Product</h6>
                                                    <select className="form-control" onChange={(e) => setProductReq({ ...productReq, product_SKU: e.target.value })} >
                                                        <option value='' hidden>Select Product</option>
                                                        {productList.map((val) => <option value={val.SKU}>{val.Name}</option>)}
                                                    </select>
                                                </div>
                                                <div className="qty-req-product ms-4">
                                                    <h6>Product Qty</h6>
                                                    {skuQuantity}
                                                </div>
                                                <div className="inputReqQty ms-4">
                                                    <h6>Input Qty</h6>
                                                    <input type="number" className="form-control" onChange={(e) => setProductReq({ ...productReq, reqQty: e.target.value })} />
                                                </div>
                                                <button className="input-req-product mt-4 ms-auto" onClick={onAddReq}>+ Add</button>
                                            </div>
                                            {
                                                reqProduct.length > 0 ?
                                                    <div className="req-product-list px-1 pt-2">
                                                        {reqProduct.map((val, index) => {
                                                            return (
                                                                <div className="inner-req-product-list d-flex pb-2">
                                                                    <p className="me-4 mb-0">{index + 1}.</p>
                                                                    <p className="w-25 mb-0">{val.product_Name}</p>
                                                                    <p className="w-25 mb-0">Quantity: {val.reqQty}</p>
                                                                    <p className="mb-0">Price: {format(val.reqPrice)}</p>
                                                                </div>

                                                            );
                                                        })}
                                                        <p className="mb-0 d-flex ms-auto">Total Price: {format(totalPrice)}</p>
                                                    </div>
                                                    :
                                                    null
                                            }
                                            <button type="submit" className="admin-total-input d-flex ms-auto mt-3" onClick={() => onSetTotalCost(val.prescription_ID)}>Input Total</button>
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