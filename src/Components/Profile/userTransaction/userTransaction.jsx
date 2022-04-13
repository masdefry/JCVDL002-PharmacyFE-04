import React, { useState, useEffect } from 'react';
import '../../../Supports/Stylesheets/Components/ProfileComp.css';

import { PresUserTransactionCard } from '../../Card/presUserTransaction';

import noOrder from '../../../Supports/Assets/Profile/no-order.svg';

export const UserTransaction = () => {
	const [page, setPage] = useState('');

	return (
		<div className='transaction-container col'>
			<div className='transaction-header mx-auto row'>
				<p>Resep Dokter</p>
			</div>
			<div className='transaction-body'>
				<PresUserTransactionCard />
			</div>
		</div>
	);
};