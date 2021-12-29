import React, { useState, useEffect } from "react";

export const AdminUTransaction = () => {

    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    return (
        <div className='admin-container container p-0'>
            <div className="admin-card p-0">
                <div className='admin-header'>
                    <p>Manage User Transaction</p>
                </div>
                <div className="admin-body">
                    <h1>Nanti Ada Disini</h1>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
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
            </div>
        </div>
    );
};