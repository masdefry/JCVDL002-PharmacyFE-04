import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../Supports/Stylesheets/Pages/Admin.css';

import { AdminManage } from '../../Components/Admin/adminManage';
import { AdminUTransaction } from '../../Components/Admin/AdminUTransaction';
import { keepLogin, profileDetail } from '../../Redux/Actions/userActions';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';
import Settings from '../../Supports/Assets/Profile/cog.svg';


const AdminPages = () => {

    const userProfile = useSelector((state) => state.userDetailReducer);
    const { userDetail } = userProfile;
    console.log('data user' + JSON.stringify(userDetail));

    const [page, setPage] = useState('product');

    return (
        <div className='profile-container container'>
            <div className='row'>
                <div className='mini-admin-card shadow pt-2 px-0 col h-100 me-2'>
                    <div className='mini-admin px-2 row m-0'>
                        {page === 'product' ?
                            <div className="product-card">
                                <div className="product-header text-center mt-2 fs-5">
                                    <strong>Filter Products</strong>
                                </div>
                                <div className="product-card-body mt-3 mb-1">
                                    <label
                                        className='mb-2'
                                        htmlFor="searchProductName">Product Name</label>
                                    <input
                                        name="searchProductName"
                                        type="text"
                                        className="form-control mb-3"
                                    />
                                    <label
                                        className='mb-2'
                                        htmlFor="searchCategory">Product Category</label>
                                    <select
                                        name="searchCategory"
                                        className="form-control"
                                    >
                                        <option value='' hidden>Categories</option>
                                        <option value='1'>Tablet</option>
                                        <option value='2'>Kapsul</option>
                                        <option value='3'>Sirup</option>
                                        <option value='4'>Obat Tetes</option>
                                        <option value='5'>Salep</option>
                                        <option value='6'>Serbuk</option>
                                    </select>
                                    <div className="d-grid">
                                        <button
                                            className="submit-btn btn-sm d-grid mt-4"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            page === 'transaction' ?
                                <div className="product-card">
                                    <div className="product-header text-center mt-2 fs-5">
                                        <strong>Search User</strong>
                                    </div>
                                    <div className="product-card-body mt-3 mb-1">
                                        <input
                                            name="searchProductName"
                                            type="text"
                                            className="form-control mb-3"
                                        />
                                        <div className="d-grid">
                                            <button
                                                className="submit-btn btn-sm d-grid mt-1"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div className='button-container '>
                        <button
                            className='trans-button row px-1 mx-0 my-3 p-0'
                            align='center'
                            onClick={() => setPage('transaction')}
                            disabled={page === 'transaction'}>
                            <img src={Transaction} className='tr-wallet col' />
                            <span className='col'>
                                <strong>User Transaction</strong>
                            </span>
                            <img src={Arrow} className='tr-arrow col my-auto' />
                        </button>
                        <div className='button-container '>
                            <button
                                className='trans-button row px-1 mx-0 my-3 p-0'
                                align='center'
                                onClick={() => setPage('product')}
                                disabled={page === 'product'}>
                                <img src={Admin} className='tr-wallet col' />
                                <span className='col'>
                                    <strong>Manage Product</strong>
                                </span>
                                <img src={Arrow} className='tr-arrow col my-auto' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='admin-selection p-0 col-9 ms-5'>
                    {page === 'product' ?
                        <div className="admin-selection-card">
                            <AdminManage />
                        </div>
                        :
                        page === 'transaction' ?
                            <div className="admin-selection-card">
                                <AdminUTransaction />
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};
export default AdminPages;