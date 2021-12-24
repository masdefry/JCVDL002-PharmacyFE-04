import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/ProfileComp.css';

import { connect } from 'react-redux';

export const AdminManage = () => {

	const check = () => {

	};

	const [addBtn, setAddBtn] = useState('');
	const [addProduct, setAddProduct] = useState({
		ProductName: '',
		ProductQty: 0,
		ProductPrice: 0,
		ProductImg: null,
		ProductDesc: '',
	});

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
		<div className='admin-container'>
			<div className='admin-header'>
				<p>Manage Products</p>
			</div>
			<div className='admin-body'>
				<table className='table table-bordered mt-4'>
					<thead className='thead-light'>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Image</th>
							<th>Description</th>
							<th>Category</th>
							<th colSpan='2'>Action</th>
						</tr>
					</thead>
					<tbody>Nanti ada disini</tbody>
					{addBtn === '' ? (
						<div className='addbtn btn btn-large' align='center'>
							<button onClick={() => setAddBtn('add')}>+ Add Products</button>
						</div>
					) : (
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
									/>
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
					)}
				</table>
			</div>
		</div>
	);
};
