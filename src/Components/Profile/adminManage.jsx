import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Components/ProfileComp.css';

export const AdminManage = () => {
	const [addBtn, setAddBtn] = useState('');
	const [addProduct, setAddProduct] = useState({
		ProductName: '',
		ProductQty: 0,
		ProductPrice: 0,
		ProductImg: '',
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
				<table className='table mt-4'>
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
					<tfoot className='bg-light'>
						{addBtn === '' ? (
							<div className='addbtn'>
								<button onClick={() => setAddBtn('add')}>+ Add Products</button>
							</div>
						) : (
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
										<option value=''>All Items</option>
										<option value='kaos'>Kaos</option>
										<option value='celana'>Celana</option>
										<option value='aksesoris'>Aksesoris</option>
									</select>
								</td>
								<td colSpan='2'>
									<button className='add-submit-btn'>Add Product</button>
								</td>
							</tr>
						)}
					</tfoot>
				</table>
			</div>
		</div>
	);
};
