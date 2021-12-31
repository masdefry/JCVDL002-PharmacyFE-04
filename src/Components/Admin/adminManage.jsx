import React, { useState, useEffect, useRef } from 'react';
import '../../Supports/Stylesheets/Pages/Admin.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { AddProductModals } from '../Modals/adminAddProduct';

export const AdminManage = () => {
	const imageInput = useRef();

	useEffect(() => {
		fetchProduct();
	}, []);

	const [productList, setProductList] = useState([]);
	const [page, setPage] = useState(0);
	const [maxPage, setMaxPage] = useState(0);

	const fetchProduct = () => {
		Axios.get(`${API_URL}/products`)
			.then((result) => {
				setProductList(result.data);
			})
			.catch(() => {
				alert('fetchProduct gagal');
			});
	};

	const renderProducts = () => {
		return productList.map((val) => {
			<tr>
				<td>{val.id}</td>
				<td>{val.productName}</td>
				<td>{val.price}</td>
				<td>{val.description}</td>
				<td>{val.category}</td>
				<td>
					<img src={val.productImage} className="admin-product-img" alt="" />
				</td>
				<td>
					<button
						onClick={() => this.editToggle(val)}
						className="btn btn-secondary"
					>
						Edit
					</button>
				</td>
				<td>
					<button
						onClick={() => this.deleteBtnHandler(val.id)}
						className="btn btn-danger"
					>
						Delete
					</button>
				</td>
			</tr>;
		});
	};

	return (
		<div className='admin-container container p-0'>
			<div className="admin-card p-0">
				<div className='admin-header'>
					<p>Manage Products</p>
				</div>
				<div className='admin-body'>
					<table className='table table-bordered m-0'>
						<thead className='thead-light text-center'>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Price</th>
								<th>Description</th>
								<th>Quantity</th>
								<th>Category</th>
								<th>Image</th>
								<th colSpan='2'>Action</th>
							</tr>
						</thead>
						<tbody>{renderProducts}</tbody>
					</table>
					<div className='addmodal d-grid'>
						<AddProductModals />
					</div>
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
