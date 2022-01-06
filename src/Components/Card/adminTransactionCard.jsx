import React, { useState, useEffect } from "react";
import '../../Supports/Stylesheets/Components/Cards.css';

import { AdminTransactionDetailModal } from "../Modals/adminTransModal";

import Masker from '../../Supports/Assets/download.jpg';

export const AdminTransactionCard = () => {

    return (
        <div className="transaction-card-container mx-3 my-3">
            <div className="transaction-card-body mx-1 py-3 px-4 shadow-sm row">
                <div className="tr-status px-1 pb-3 fw-bolder">
                    <p className="m-0">User: user@mail.co.id</p>
                </div>
                <div className="transaction-detail col p-0">
                    <div className="tr-detail row ps-3">
                        <img src={Masker} className="border col-3" />
                        <span className="col">
                            <p className="m-0">Nama Barang</p>
                            <p className="text-muted m-0">Jumlah barang X harga barang</p>
                            <p className="text-muted pt-2 m-0">Status : Unpaid</p>
                        </span>
                    </div>
                </div>
                <div className="transaction-total col-2" align='end'>
                    <div className="total-shopping mt-3 border-start border-2">
                        <p className="text-muted mb-1">Total Belanja</p>
                        <p className="mb-0"><strong>Rp.25.000</strong></p>
                    </div>
                </div>
                <div className="transaction-actions d-flex justify-content-end mx-0 px-0">
                    {/* <button id="tr-detail-btn" className="mt-0">Transaction Detail</button> */}
                    <AdminTransactionDetailModal />
                    <button id="tr-reject-btn" className="mt-0">Reject</button>
                    <button id="tr-repeat-btn" className="mt-0">Complete</button>
                </div>
            </div>
        </div>
    );
};;;