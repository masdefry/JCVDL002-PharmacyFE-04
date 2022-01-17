import React, { useState, useEffect } from "react";
import '../../Supports/Stylesheets/Pages/Payment.css';
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";

import { fetchActiveAddress, userPaymentID, userPaymentDetail } from "../../Redux/Actions/userActions";
import { useNavigate, useParams } from "react-router-dom";

import Masker from '../../Supports/Assets/download.jpg';

const PaymentPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userPaymentID } = useSelector((state) => state.paymentIDReducer);
    const address = useSelector((state) => state.fetchAddressReducer);
    const { userAddress } = address;
    const selectedAddress = useSelector((state) => state.activeAddressReducer);
    const { activeAddress } = selectedAddress;
    const { paymentDetails } = useSelector((state) => state.paymentDetailReducer);

    console.log(userPaymentID);
    console.log(activeAddress);
    console.log(paymentDetails);

    const [duration, setDuration] = useState('');
    const [courier, setCourier] = useState('');
    const [payment, setPayment] = useState(0);
    const [shippingMethod, setShippingMethod] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [pageMessage, setPageMessage] = useState('Loading');
    const [totalShop, setTotalShop] = useState(0);
    const [totalTax, setTotalTax] = useState(0);

    const userInfoLocalStorage =
        localStorage.getItem('userInfoToken') ?
            JSON.parse(localStorage.getItem('userInfoToken'))
            :
            null;

    useEffect(() => {
        dispatch(userPaymentDetail());
    }, []);

    useEffect(() => {
        if (duration === 'Reguler' && courier === 'JNE') {
            setShippingMethod(1);
            setShippingCost(10000);
            setTotalTax((paymentDetails.Total_Price + 10000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'Reguler' && courier === 'JNT') {
            setShippingMethod(2);
            setShippingCost(9000);
            setTotalTax((paymentDetails.Total_Price + 9000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'Reguler' && courier === 'SiCepat') {
            setShippingMethod(3);
            setShippingCost(8000);
            setTotalTax((paymentDetails.Total_Price + 8000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'SameDay' && courier === 'JNE') {
            setShippingMethod(4);
            setShippingCost(15000);
            setTotalTax((paymentDetails.Total_Price + 15000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'SameDay' && courier === 'JNT') {
            setShippingMethod(5);
            setShippingCost(14000);
            setTotalTax((paymentDetails.Total_Price + 14000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'SameDay' && courier === 'SiCepat') {
            setShippingMethod(6);
            setShippingCost(13000);
            setTotalTax((paymentDetails.Total_Price + 13000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'SameDay' && courier === 'Grab') {
            setShippingMethod(8);
            setShippingCost(14000);
            setTotalTax((paymentDetails.Total_Price + 14000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'SameDay' && courier === 'Gojek') {
            setShippingMethod(7);
            setShippingCost(15000);
            setTotalTax((paymentDetails.Total_Price + 15000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'Instant' && courier === 'Grab') {
            setShippingMethod(10);
            setShippingCost(26000);
            setTotalTax((paymentDetails.Total_Price + 26000) + (paymentDetails.Total_Price * 10 / 100));
        }
        if (duration === 'Instant' && courier === 'Gojek') {
            setShippingMethod(9);
            setShippingCost(25000);
            setTotalTax((paymentDetails.Total_Price + 25000) + (paymentDetails.Total_Price * 10 / 100));
        }
    }, [courier, duration]);


    // let totalPrice = paymentDetails.Total_Price;
    // let totalShipping = Shipping();
    // let totalShopping = totalPrice + totalShipping;

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(money);
        return formatMoney;
    };

    const OnPay = () => {
        let ID = paymentDetails.ID;
        try {
            if (!shippingMethod || !totalTax || !payment) throw { message: 'Pilih payment method / shipping method!' };
            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);
            console.log(userDataParse);
            console.log(userDataParse.token);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            console.log(config);
            Axios.patch(`${API_URL}/user/userPays`, { shippingMethod, totalTax, payment, ID }, config)
                .then((res) => {
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console(error.message);
        }
    };

    if (paymentDetails === undefined || paymentDetails === userInfoLocalStorage) {
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
        <div className="payment-outer-container px-5 py-4 mx-5 my-3">
            <div className="payment-container mx-auto row">
                <div className="payment-content col-7 me-5 px-0">
                    <div className="payment-content-container">
                        <h3 className="mb-0"><strong>Checkout</strong></h3>
                        <div className="user-payment-address p-0 pb-3">
                            <h4 className="mb-0 pt-3">Alamat Penerima</h4>
                            <div className="user-payment-address border-top border-bottom">
                                <div className="address-payment">
                                    <p className="mt-1 mb-1"><strong>{activeAddress.Name}</strong> ({activeAddress.Label})</p>
                                    <p className="mb-1">+62{activeAddress.Phone}</p>
                                    <p className="text-muted mb-1">{activeAddress.Detail}</p>
                                </div>
                            </div>
                        </div>
                        <div className="user-payment-content mt-3 row py-4">
                            <div className="content-product col d-flex">
                                <img src={paymentDetails.Image} className="border" />
                                <span>
                                    <p className="m-0">Resep Dokter</p>
                                    <p className="text-muted m-0">({paymentDetails.Order_Qty}) barang</p>
                                    <p className="text-muted pt-2 m-0">{format(paymentDetails.Total_Price)}</p>
                                </span>
                            </div>
                            <div className="shipment-content col px-4">
                                <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}
                                ><strong>Pilih Durasi</strong></p>
                                <div className="shipping-duration-select">
                                    <select
                                        onChange={(e) => setDuration(e.target.value)}
                                        name="select-duration"
                                        className="form-control mb-3"
                                    >
                                        <option value="" hidden>Pilih Durasi Pengiriman</option>
                                        <option value="Reguler">Reguler</option>
                                        <option value="SameDay">SameDay</option>
                                        <option value="Instant">Instant</option>
                                    </select>
                                    {duration === 'Reguler' ?
                                        <div className="courier-select">
                                            <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}
                                            ><strong>Pilih Kurir</strong></p>
                                            <select
                                                onChange={(e) => setCourier(e.target.value)}
                                                name="select-duration"
                                                className="form-control mb-3"
                                            >
                                                <option value="" hidden>Pilih Kurir</option>
                                                <option value="JNE">JNE Reguler (Rp. 10.000)</option>
                                                <option value="JNT">JNT Reguler (Rp. 9.000)</option>
                                                <option value="SiCepat">SiCepat Reguler (Rp. 8.000)</option>
                                            </select>
                                        </div>
                                        :
                                        duration === 'SameDay' ?

                                            <div className="courier-select">
                                                <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}
                                                ><strong>Pilih Kurir</strong></p>
                                                <select
                                                    onChange={(e) => setCourier(e.target.value)}
                                                    name="select-duration"
                                                    className="form-control mb-3"
                                                >
                                                    <option value="" hidden>Pilih Kurir</option>
                                                    <option value="JNE">JNE SameDay (Rp. 15.000)</option>
                                                    <option value="JNT">JNT SameDay (Rp. 14.000)</option>
                                                    <option value="SiCepat">SiCepat SameDay (Rp. 13.000)</option>
                                                    <option value="Grab">Grab SameDay (Rp. 14.000)</option>
                                                    <option value="Gojek">Gojek SameDay (Rp. 15.000)</option>
                                                </select>
                                            </div>
                                            :
                                            duration === 'Instant' ?
                                                <div className="courier-select">
                                                    <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}
                                                    ><strong>Pilih Kurir</strong></p>
                                                    <select
                                                        onChange={(e) => setCourier(e.target.value)}
                                                        name="select-duration"
                                                        className="form-control mb-3"
                                                    >
                                                        <option value="" hidden>Pilih Kurir</option>
                                                        <option value="Grab">Grab Instant (Rp. 26.000)</option>
                                                        <option value="Gojek">Gojek Instant (Rp. 25.000)</option>
                                                    </select>
                                                </div>
                                                :
                                                null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="subtotal-content border-top d-flex px-2 pt-1 mb-3" style={{ fontWeight: 'bolder' }}>
                            <p>Subtotal</p>
                            <p className="ms-auto">{format(paymentDetails.Total_Price)}</p>
                        </div>
                    </div>
                </div>
                <div className="payment-details-card shadow col-4 py-3 px-0 h-100 mt-5 ms-4 ">
                    <div className='mini- px-3 row m-0'>
                        <p><strong>Ringkasan Belanja</strong></p>
                        <div className="shopping-detail border-bottom pb-3">
                            <div className="shopping-detail-content d-flex">
                                <p className="mb-0">Total Harga</p>
                                <p className="ms-auto mb-0">{format(paymentDetails.Total_Price)}</p>
                            </div>
                            <div className="shopping-detail-content d-flex">
                                <p className="mb-0">Pajak (10%)</p>
                                <p className="ms-auto mb-0">{format(paymentDetails.Total_Price * (10 / 100))}</p>
                            </div>
                            <div className="shopping-detail-content d-flex">
                                <p className="mb-0">Total Ongkos Kirim</p>
                                <p className="ms-auto mb-0">{duration !== '' && courier !== '' ? format(shippingCost) : 'Rp. 0'}</p>
                            </div>
                        </div>
                        <div className="total-subtotal d-flex mt-2" style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>
                            <p>Total Belanja</p>
                            <p className="ms-auto" style={{ color: '#3897a0' }}>{duration !== '' && courier !== '' ? format(totalTax) : 'Rp. 0'}</p>
                        </div>
                        <div className="courier-select">
                            <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}
                            ><strong>Pilih Metode Pembayaran</strong></p>
                            <select
                                onChange={(e) => setPayment(e.target.value)}
                                name="select-payment"
                                className="form-control mb-3"
                            >
                                <option value="" hidden>Pilih Metode Pembayaran</option>
                                <option value="5">BCA</option>
                                <option value="6">Mandiri</option>
                                <option value="7">BNI</option>
                                <option value="8">Permata Bank</option>
                                <option value="9">Gopay</option>
                                <option value="10">Visa</option>
                                <option value="11">American Express</option>
                            </select>
                        </div>
                        <div className="pay-button d-grid">
                            <button onClick={OnPay}>Bayar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;;