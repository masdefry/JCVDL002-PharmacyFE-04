import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../../Supports/Stylesheets/Components/AdminComp.css';

import { AdminTransactionCard } from "../Card/adminTransactionCard";
import { AdminReqTransactionCard } from "../Card/adminReqTransactionCard";

import Search from '../../Supports/Assets/Profile/searchuser.svg';

export const AdminAllTransaction = (props) => {
    const adminPresriptionOrder = useSelector((state) => state.adminPresTransReducer);
    const { adminPresOrder } = adminPresriptionOrder;
    console.log(adminPresOrder);

    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    return (
        <div className='admin-container container p-0'>
            <div className="admin-card p-0">
                <div className='admin-header'>
                    <p>Manage User Transaction</p>
                </div>
                {props.state === 'render' ?
                    <div className="admin-body py-1">
                        <AdminTransactionCard />
                    </div>
                    :

                    <div className="admin-body py-1">
                        <AdminReqTransactionCard />
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