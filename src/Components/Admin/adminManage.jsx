import React, { useState, useEffect, useRef } from 'react';
import '../../Supports/Stylesheets/Pages/Admin.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { AddProductModals } from '../Modals/adminAddProduct';
import { AdminBodyCard } from './AdminBodyCard';

export const AdminManage = (props) => {
	const imageInput = useRef();

	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(0);
	const [itemPerPage, setItemPerPage] = useState(4);

	useEffect(() => {
		fetchProduct();
	}, []);

	const [productList, setProductList] = useState([]);

	console.log(productList);

	const fetchProduct = () => {
		Axios.get(`${API_URL}/admin/fetchProduct`)
			.then((result) => {
				setProductList(result.data.data);
				setMaxPage(Math.ceil(result.data.data.length / itemPerPage));
				// console.table(result.data.data);
			})
			.catch(() => {
				alert('fetchProduct gagal');
			});
	};

	const renderProducts = () => {
		const startingIndex = (page - 1) * itemPerPage; //0
		let rawData = [...productList];

		const currentPage = rawData.slice(
			startingIndex,
			startingIndex + itemPerPage
		);
		return currentPage.map((val) => {
			if (val.Category_ID.toLowerCase().includes(props.category) && val.Name.toLowerCase().includes(props.product)) {
				return <AdminBodyCard productData={val} product={props.product} category={props.category} />;
			}
		});
	};

	const nextPageHandler = () => {
		if (page !== maxPage) {
			setPage(prev => prev + 1);
		}
	};

	const prevPageHandler = () => {
		if (page > 1) {
			setPage(prev => prev - 1);
		}
	};

	if (productList.length < 1) {
		return (
			<div className="loading text-center mt-5">
				<h2>Loading . . .</h2>
			</div>
		);
	}

	return (
		<div className='admin-container container p-0'>
			<div className="admin-card p-0">
				<div className='admin-header'>
					<p>Manage Products</p>
				</div>
				<div className='admin-body'>
					<div className='addmodal d-flex'>
						<AddProductModals />
					</div>
					<table className='table m-0'>
						<thead className='thead-light text-center'>
							<tr>
								<th>SKU</th>
								<th>Name</th>
								<th>Price</th>
								<th>Category</th>
								<th colSpan='2'>Action</th>
							</tr>
						</thead>
						<tbody>{renderProducts()}</tbody>
					</table>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-center align-items-center mt-3">
				<button
					className="page-btn"
					onClick={prevPageHandler}
					disabled={page === 1}
				>
					{'<'}
				</button>
				<div className="text-center mb-3 mx-2">
					<strong> Page {page} of {maxPage}</strong>
				</div>
				<button
					className="page-btn"
					onClick={nextPageHandler}
					disabled={page === maxPage}
				>
					{'>'}
				</button>
			</div>
		</div>
	);
};
