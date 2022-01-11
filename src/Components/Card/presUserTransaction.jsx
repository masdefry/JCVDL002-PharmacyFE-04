import React, { useState } from "react";
import '../../Supports/Stylesheets/Components/Cards.css';
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../Supports/Constants/UrlAPI";

import { USER_PAYMENT_DETAILS, USER_PAYMENT_DETAILS_FAIL } from "../../Supports/Constants/userConstants";
import { userPaymentDetail, userPaymentID } from "../../Redux/Actions/userActions";
import { TransactionDetailModal } from "../Modals/transactionDetailModal";

import nopOrder from '../../Supports/Assets/Profile/no-order.svg';
import NoUser from '../../Supports/Assets/No-User.svg';
import Masker from '../../Supports/Assets/download.jpg';

export const PresUserTransactionCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const presriptionOrder = useSelector((state) => state.userPrescriptionTransReducer);
    const { presOrderUser } = presriptionOrder;
    console.log(presOrderUser);

    const [errMessage, setErrMessage] = useState('');


    const OnPayHandler = (ID) => {
        console.log(ID);
        try {
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
            Axios.get(`http://localhost:2004/user/setPaymentDetail/1`, config)
                .then((res) => {
                    navigate('/payments');
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            setErrMessage(error.message);
        }
    };

    const onComplete = async (ID) => {
        const userdata = localStorage.getItem('userInfoToken');
        const userDataParse = JSON.parse(userdata);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            await Axios.patch(`${API_URL}/user/completeTrans`, { ID }, config);
        } catch (err) {
            console.log(err);
        }
    };


    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(money);
        return formatMoney;
    };

    const userInfoLocalStorage =
        localStorage.getItem('userInfoToken') ?
            JSON.parse(localStorage.getItem('userInfoToken'))
            :
            null;

    if (presOrderUser === undefined || presOrderUser === userInfoLocalStorage) {
        return (
            <div className="no-transaction-product d-flex w-25 flex-column mx-auto text-center my-5">
                <img src={nopOrder} />
                <h4>
                    <strong>Belum ada transaksi</strong>
                </h4>
            </div>
        );
    }

    return (
        presOrderUser.map((val) => {
            let imageSrc = `http://localhost:2004/${val.Image}`;
            let idTrans = val.prescription_ID;
            return (
                <div className="transaction-card-container mx-3 my-3">
                    <div className="transaction-card-body mx-1 py-3 px-4 shadow-sm row">
                        <div className="tr-status px-1 pb-3 fw-bolder">
                            <p className="m-0">Status: {val.Status_Name}</p>
                        </div>
                        <div className="transaction-detail col p-0">
                            <div className="tr-detail row ps-3">
                                <img src={imageSrc} className="border col-3" />
                                <span className="col">
                                    <p className="m-0 fw-bolder">Transaksi Resep Dokter</p>
                                    <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.9rem' }}>Nama Dokter: {val.Prescription_Doctor}</p>
                                    {val.Status_Name === 'Request' ?
                                        <p className="text-muted m-0" style={{ fontSize: '0.9rem' }}>Sedang diproses oleh admin</p>
                                        :
                                        <>
                                            <p className="text-muted m-0" style={{ fontSize: '0.9rem' }}>{val.Order_Qty} Barang</p>
                                            <p className="text-muted m-0" style={{ fontSize: '0.9rem' }}>{format(val.Total_Price)}</p>
                                        </>
                                    }
                                    {val.Status_Name === 'Request' ? <div className="mb-4 pb-2"></div> : null}
                                </span>
                            </div>
                        </div>
                        <div className="transaction-total col-3" align='end'>
                            <div className="total-shopping mt-3 border-start border-2">
                                <p className="text-muted mb-1">Total Belanja</p>
                                {val.Status_Name === 'Request' ?
                                    <p className="mb-0"><strong>Proses Admin</strong></p>
                                    :
                                    <p className="mb-0"><strong>{format(val.Total_Price)}</strong></p>
                                }
                            </div>
                        </div>
                        <div className="transaction-actions d-flex justify-content-end mx-0 px-0">
                            {val.Status_Name === 'Request' ?
                                null
                                :
                                val.Status_Name === 'Belum Dibayar' ?
                                    <button
                                        id="tr-repeat-btn"
                                        className="mt-0"
                                        onClick={() => OnPayHandler(idTrans)}>Bayar</button>
                                    :
                                    val.Status_Name === 'Upload Bukti Pembayaran' ?
                                        <TransactionDetailModal data={val} />

                                        :
                                        val.Status_Name === 'Dibayar' || val.Status_Name === 'Dikirim' ?
                                            <>
                                                <TransactionDetailModal data={val} />
                                                <button id="tr-repeat-btn" className="mt-0" onClick={() => onComplete(idTrans)}>Selesai</button>
                                            </>
                                            :
                                            val.Status_Name === 'Selesai' ?
                                                <>
                                                    <TransactionDetailModal data={val} />
                                                </>
                                                :
                                                null
                            }
                        </div>
                    </div>
                </div>
            );
        })
    );
};;;