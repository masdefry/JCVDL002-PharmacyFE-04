import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../../Supports/Stylesheets/Components/AdminComp.css';

import { AdminTransactionCard } from "../Card/adminTransactionCard";

import Search from '../../Supports/Assets/Profile/searchuser.svg';

export const AdminUTransaction = (props) => {
    const adminPresriptionOrder = useSelector((state) => state.adminPresTransReducer);
    const { adminPresOrder } = adminPresriptionOrder;
    console.log(adminPresOrder);

    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    return (
        <div className='admin-container container p-0'>
            <div className="admin-card p-0">
                <div className='admin-header'>
                    <p>User Uncomplete Transaction</p>
                </div>
                {props.state === 'render' ?
                    <div className="admin-body py-1">
                        <AdminTransactionCard render={['Belum Dibayar', 'Dibayar', 'Dikirim']} />
                    </div>
                    :
                    <div className="search-user col text-center mx-auto">
                        <img src={Search} alt="" />
                        <p className="mb-0">Search User First</p>
                    </div>
                }
            </div>
            {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <button
                    className="page-btn"
                >
                    {'<'}
                </button>
                <div className="text-center mb-3 mx-2">
                    Page {page} of {maxPage}
                </div>
                <button
                    className="page-btn"
                >
                    {'>'}
                </button>
            </div> */}
        </div>
    );
};