import React, { useState, useEffect, useRef } from 'react';
import '../../Supports/Stylesheets/Pages/Admin.css';

export const AdminManage = () => {
	const imageInput = useRef();

	const check = () => {

	};

	const [addBtn, setAddBtn] = useState('unedit');
	const [addProduct, setAddProduct] = useState({
		ProductName: '',
		ProductQty: 0,
		ProductPrice: 0,
		ProductImg: null,
		ProductDesc: '',
	});

	const [page, setPage] = useState(0);
	const [maxPage, setMaxPage] = useState(0);

	const onFill = (val, dataType) => {
		if (dataType === 'ProductName') {
			setAddProduct({ ...addProduct, ProductName: val });
		}
		if (dataType === 'ProductQty') {
			setAddProduct({ ...addProduct, ProductQty: val });
		}
		if (dataType === 'ProductPrice') {
			setAddProduct({ ...addProduct, ProductPrice: val });
		}
		if (dataType === 'ProductImg') {
			setAddProduct({ ...addProduct, ProductImg: val });
		}
		if (dataType === 'ProductDesc') {
			setAddProduct({ ...addProduct, ProductDesc: val });
		}
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
								<th>Image</th>
								<th>Description</th>
								<th>Quantity</th>
								<th>Category</th>
								<th colSpan='2'>Action</th>
							</tr>
						</thead>
						<tbody>Nanti ada disini</tbody>
						{addBtn === 'edit' ? (
							<tfoot className='bg-light'>
								<tr>
									<td></td>
									<td>
										<input
											onChange={(val) => onFill(val, 'ProductName')}
											name='addPrdctName'
											type='text'
											className='form-control'
										/>
									</td>
									<td>
										<input
											onChange={(val) => onFill(val, 'ProductPrice')}
											name='addPrdctPrice'
											type='number'
											className='form-control'
										/>
									</td>
									<td>
										<input
											onChange={(val) => onFill(val, 'ProductImg')}
											name='addPrdctImage'
											type='file'
											className='form-control'
											ref={imageInput}
											style={{ display: 'none' }}
										/>
										<button
											onClick={() => imageInput.current.click()}
											className='add-submit-btn btn-sm'
										>Add Image</button>
									</td>
									<td>
										<input
											onChange={(val) => onFill(val, 'ProductDesc')}
											name='addPrdctDescription'
											type='text'
											className='form-control'
										/>
									</td>
									<td>
										<input
											onChange={(val) => onFill(val, 'ProductQty')}
											name='addPrdctQty'
											type='number'
											className='form-control'
										/>
									</td>
									<td>
										<select
											onChange={(e) => this.inputHandler(e)}
											name='addPrdctCategory'
											className='form-control'>
											<option value='' hidden>Categories</option>
											<option value='1'>Tablet</option>
											<option value='2'>Kapsul</option>
											<option value='3'>Sirup</option>
											<option value='4'>Obat Tetes</option>
											<option value='5'>Salep</option>
											<option value='6'>Serbuk</option>
										</select>
									</td>
									<td colSpan='2'>
										<button className='add-submit-btn' onClick={() => check()}>Add Product</button>
									</td>
								</tr>
							</tfoot>
						) : null}
					</table>
					{addBtn === 'unedit' ?
						<div className='addbtn d-grid'>
							<button onClick={() => setAddBtn('edit')}>+ Add Products</button>
						</div>
						:
						<div className="close-btn d-grid">
							<button onClick={() => setAddBtn('unedit')}>Close</button>
						</div>
					}
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
