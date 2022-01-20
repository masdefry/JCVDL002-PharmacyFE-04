import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../Supports/Stylesheets/Pages/Admin.css';

import { AdminManage } from '../../Components/Admin/adminManage';
import { AdminUTransaction } from '../../Components/Admin/AdminUTransaction';
import { keepLogin, profileDetail } from '../../Redux/Actions/userActions';
import { fetchUserPrescriptionAdmin } from '../../Redux/Actions/userActions';
import { AdminAllTransaction } from '../../Components/Admin/AdminAllTrans';
import { AdminPresTransaction } from '../../Components/Admin/adminPresTransaction';

import PPlaceholder from '../../Supports/Assets/Profile/Profile-placeholder.svg';
import Transaction from '../../Supports/Assets/Profile/transaction-profile.svg';
import Arrow from '../../Supports/Assets/Profile/arrow.svg';
import Admin from '../../Supports/Assets/Profile/activity-profile.svg';
import Settings from '../../Supports/Assets/Profile/cog.svg';


const AdminPages = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userDetailReducer);
    const { userDetail } = userProfile;
    console.log('data user' + JSON.stringify(userDetail));

    const [page, setPage] = useState('product');
    const [transactionPage, setTransactionPage] = useState('uncomplete');
    const [userEmail, setUserEmail] = useState('');
    const [toProps, setToProps] = useState('');
    const [productToProps, setProductToProps] = useState('');
    const [categoryToProps, setCategoryToProps] = useState('');

    const TransUserSearch = (e) => {
        e.preventDefault();
        dispatch(fetchUserPrescriptionAdmin(userEmail));
        setToProps('render');
    };

    return (
        <div className='profile-container container'>
            <div className='row'>
                <div className='mini-admin-card shadow pt-2 px-0 col h-100 me-2'>
                    <div className='mini-admin px-2 row m-0'>
                        {page === 'product' ?
                            <div className="admin-mini-card">
                                <div className="product-header text-center mt-2 fs-5">
                                    <strong>Filter Products</strong>
                                </div>
                                <div className="admin-mini-card-body mt-3 mb-1">
                                    <label
                                        className='mb-2'
                                        htmlFor="searchProductName">Product Name</label>
                                    <input
                                        name="searchProductName"
                                        type="text"
                                        className="form-control mb-3"
                                        onChange={(e) => setProductToProps(e.target.value)}
                                    />
                                    <label
                                        className='mb-2'
                                        htmlFor="searchCategory">Product Category</label>
                                    <select
                                        name="searchCategory"
                                        className="form-control mb-4"
                                        onChange={(e) => setCategoryToProps(e.target.value)}
                                    >
                                        <option value='' hidden>Categories</option>
                                        <option value='Tablet'>Tablet</option>
                                        <option value='Kapsul'>Kapsul</option>
                                        <option value='Sirup'>Sirup</option>
                                        <option value='Obat Tetes'>Obat Tetes</option>
                                        <option value='Salep'>Salep</option>
                                        <option value='Serbuk'>Serbuk</option>
                                    </select>
                                    {/* <div className="d-grid">
                                        <button
                                            className="submit-btn btn-sm d-grid mt-4"
                                        >
                                            Search
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            :
                            page === 'transaction' ?
                                <div className="admin-mini-card">
                                    <div className="product-header text-center mt-2 fs-5">
                                        <strong>Search User</strong>
                                    </div>
                                    <div className="admin-mini-card-body mt-3 mb-1">
                                        <input
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            name="searchProductName"
                                            type="text"
                                            className="form-control mb-3"
                                        />
                                        <div className="d-grid">
                                            <button
                                                className="submit-btn btn-sm d-grid mt-1"
                                                onClick={(e) => TransUserSearch(e)}
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
                        {/* {page === 'transaction' ?
                            <div className="inner-transaction" id='inner-trans'>
                                <button
                                    className='inner-trans-button row pt-2 ps-4 pe-3 mx-0 my-2 p-0'
                                    id='inner-trans-btn'
                                    align='center'
                                    onClick={() => setTransactionPage('uncomplete')}>
                                    <span className='col'>
                                        <p>Uncomplete</p>
                                    </span>
                                    <img src={Arrow} className='tr-arrow col my-auto' />
                                </button>
                                <button
                                    className='inner-trans-button row ps-4 pe-3 mx-0 my-2 p-0'
                                    id='inner-trans-btn'
                                    align='center'
                                    onClick={() => setTransactionPage('all')}>
                                    <span className='col'>
                                        <p>All Transaction</p>
                                    </span>
                                    <img src={Arrow} className='tr-arrow col my-auto' />
                                </button>
                                <button
                                    className='inner-trans-button row pb-2 ps-4 pe-3 mx-0 my-2 p-0'
                                    id='inner-trans-btn'
                                    align='center'
                                    onClick={() => setTransactionPage('request')}>
                                    <span className='col'>
                                        <p>Request</p>
                                    </span>
                                    <img src={Arrow} className='tr-arrow col my-auto' />
                                </button>
                            </div>
                            :
                            null
                        } */}
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
                            <AdminManage product={productToProps.toLocaleLowerCase()} category={categoryToProps.toLocaleLowerCase()} />
                        </div>
                        :
                        page === 'transaction' ?
                            <AdminAllTransaction state={toProps} />
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};
export default AdminPages;