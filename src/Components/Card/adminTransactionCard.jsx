import React, { useState, useEffect } from "react";
import '../../Supports/Stylesheets/Components/Cards.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";

import { fetchUserPrescriptionAdmin } from "../../Redux/Actions/userActions";
import { AdminTransactionDetailModal } from "../Modals/adminTransModal";

import NoUser from '../../Supports/Assets/No-User.svg';
import Search from '../../Supports/Assets/Profile/searchuser.svg';
import Masker from '../../Supports/Assets/download.jpg';

export const AdminTransactionCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const adminPresriptionOrder = useSelector((state) => state.adminPresTransReducer);
    const { adminPresOrder } = adminPresriptionOrder;
    console.log(adminPresOrder);

    const [transId, setTransId] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const OnSend = (e, ID) => {
        e.preventDefault();
        try {
            if (!ID) throw { message: 'Theres no ID' };

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.patch(`${API_URL}/admin/sendTrans/${ID}`)
                .then((res) => {
                    alert('Product Sent');
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const onReject = (e, ID) => {
        e.preventDefault();
        try {
            if (!ID) throw { message: 'Theres no ID' };

            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${userDataParse.token}`
                }
            };

            Axios.delete(`${API_URL}/admin/rejectTrans/${ID}`)
                .then((res) => {
                    alert('Transaction Rejected');
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

    if (adminPresOrder === undefined || !adminPresOrder[0]) {
        return (
            <div className="search-user col text-center mx-auto mb-4">
                <img src={NoUser} alt="" />
                <p className="mb-0">User Or Transaction not found!</p>
            </div>
        );
    }

    return (
        adminPresOrder.map((val) => {
            let imageSrc = `http://localhost:2004/${val.Image}`;
            return (
                <div className="transaction-card-container mx-3 my-3">
                    <div className="transaction-card-body mx-1 py-3 px-4 shadow-sm row">
                        <div className="tr-status px-1 pb-3 fw-bolder">
                            <p className="m-0">User: {val.User_Email}</p>
                        </div>
                        <div className="transaction-detail col p-0">
                            <div className="tr-detail row ps-3">
                                <img src={imageSrc} className="border col-3" />
                                <span className="col">
                                    <p className="m-0">Resep Dokter</p>
                                    <p className="text-muted m-0">{format(val.Total_Price)}</p>
                                    <p className="text-muted pt-2 m-0">Status : {val.Status_Name}</p>
                                </span>
                            </div>
                        </div>
                        <div className="transaction-total col-2" align='end'>
                            <div className="total-shopping mt-3 border-start border-2">
                                <p className="text-muted mb-1">Total Belanja</p>
                                <p className="mb-0"><strong>{format(val.Total_Price)}</strong></p>
                            </div>
                        </div>
                        <div className="transaction-actions d-flex justify-content-end mx-0 px-0">
                            {/* <button id="tr-detail-btn" className="mt-0">Transaction Detail</button> */}
                            {val.Status_Name === 'Request' ?
                                <>
                                    <AdminTransactionDetailModal data={val} />
                                    <button id="tr-reject-btn" className="mt-0" onClick={(e) => onReject(e, val.prescription_ID)}>Reject</button>
                                </>
                                :
                                val.Status_Name === 'Belum Dibayar' ?
                                    <>
                                        <AdminTransactionDetailModal data={val} />
                                        <button id="tr-reject-btn" className="mt-0" onClick={(e) => onReject(e, val.prescription_ID)} > Reject</button>
                                    </>
                                    :
                                    val.Status_Name === 'Dibayar' ?
                                        <>
                                            <AdminTransactionDetailModal data={val} />
                                            <button id="tr-repeat-btn" className="mt-0" onClick={(e,) => OnSend(e, val.prescription_ID)}>Kirim</button>
                                        </>
                                        :
                                        val.Status_Name === 'Dikirim' || val.Status_Name === 'Selesai' ?
                                            <>
                                                <AdminTransactionDetailModal data={val} />
                                            </>
                                            :
                                            null
                            }
                        </div>
                    </div>
                </div >
            );
        })
    );
};