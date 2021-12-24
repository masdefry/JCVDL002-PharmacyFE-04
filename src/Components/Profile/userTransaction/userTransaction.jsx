import React, { useState, useEffect } from 'react';
import '../../../Supports/Stylesheets/Components/ProfileComp.css';

import noOrder from '../../../Supports/Assets/Profile/no-order.svg';

export const UserTransaction = () => {
	const [page, setPage] = useState('');

	return (
		<div className='transaction-container col'>
			<div className='transaction-header w-75 mx-auto row'>
				<div className='transaction-button col px-0' align='center'>
					<button
						className='my-3'
						onClick={() => setPage(page === 'recent')}
						disabled={page === 'past'}>
						Recent Transaction
					</button>
				</div>
				<div className='transaction-button col p-0' align='center'>
					<button
						className=' my-3'
						onClick={() => setPage(page === 'past')}
						disabled={page === 'recent'}>
						Past Transaction
					</button>
				</div>
			</div>
			<div className='transaction-body'>
				<img src={noOrder} />
				<h4>
					<strong>Belum ada transaksi</strong>
				</h4>
				<button>Belanja Sekarang</button>
			</div>
		</div>
	);
};
