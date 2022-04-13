import React from 'react';
import '../../../Supports/Stylesheets/Components/ProfileComp.css';

import { TransactionCard } from '../../Card/transactionCard';

import noOrder from '../../../Supports/Assets/Profile/no-order.svg';

export const OnGoingTransaction = () => {
    return (
        <div className='transaction-container col'>
            <div className='transaction-header mx-auto row'>
                <p>Transaksi Produk</p>
            </div>
            <div className='transaction-body'>
                <div className="no-transaction-product d-flex w-25 flex-column mx-auto text-center my-5">
                    <img src={noOrder} />
                    <h4>
                        <strong>Belum ada transaksi</strong>
                    </h4>
                </div>
                {/* <TransactionCard /> */}
            </div>
        </div>
    );
};