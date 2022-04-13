import React, { useState, useRef } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Axios from 'axios';
import { useEffect } from 'react';

export const AddProductModals = () => {

    const imageInput = useRef();

    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const [totalFile, setTotalFile] = useState(null);
    const [imagesErrorMessage, setImagesErrorMessage] = useState('');


    const [productQty, setProductQty] = useState(0);
    const [addProduct, setAddProduct] = useState({
        ProductName: '',
        ProductQty: 0,
        ProductPrice: 0,
        ProductDesc: '',
        ProductCategory: 0,
        ProductType: ''
    });

    useEffect(() => {
        if (addProduct.ProductCategory === '1') {
            setProductQty(addProduct.ProductQty * 20);
        }
        if (addProduct.ProductCategory === '2') {
            setProductQty(addProduct.ProductQty * 20);
        }
        if (addProduct.ProductCategory === '3') {
            setProductQty(addProduct.ProductQty * 200);
        }
        if (addProduct.ProductCategory === '4') {
            setProductQty(addProduct.ProductQty * 10);
        }
        if (addProduct.ProductCategory === '5') {
            setProductQty(addProduct.ProductQty * 10);
        }
        if (addProduct.ProductCategory === '6') {
            setProductQty(addProduct.ProductQty * 10);
        }
    }, [addProduct.ProductQty]);


    const onImagesValidation = (e) => {
        const files = e.target.files;
        console.log(files);
        try {
            if (files.length > 1) throw { message: 'Select 1 Images Only!' };

            if (files[0].size > 1000000) throw { message: `${files[0].name} More Than 1Mb` };

            setImages([...files]);
            setImagesErrorMessage('');
            setTotalFile(files.length);

        } catch (error) {
            setImagesErrorMessage(error.message);
        }
    };

    const onFill = (val, dataType) => {
        console.log(val.target.value);
        if (dataType === 'ProductName') {
            setAddProduct({ ...addProduct, ProductName: val.target.value });
        }
        if (dataType === 'ProductQty') {
            setAddProduct({ ...addProduct, ProductQty: val.target.value });
        }
        if (dataType === 'ProductPrice') {
            setAddProduct({ ...addProduct, ProductPrice: val.target.value });
        }
        if (dataType === 'ProductDesc') {
            setAddProduct({ ...addProduct, ProductDesc: val.target.value });
        }
        if (dataType === 'ProductCategory') {
            setAddProduct({ ...addProduct, ProductCategory: val.target.value });
        }
        if (dataType === 'ProductType') {
            setAddProduct({ ...addProduct, ProductType: val.target.value });
        }
    };


    const onSubmitData = () => {
        console.log(images[0]);
        let Name = addProduct.ProductName;
        let Price = addProduct.ProductPrice;
        let Description = addProduct.ProductDesc;
        let Qty = productQty;
        let Category_ID = addProduct.ProductCategory;
        let Product_Type = addProduct.ProductType;

        console.log(Name, Price, Description, Qty, Category_ID);

        console.log(addProduct);

        try {
            if (!Name || !Price || !Description || !Qty || !Category_ID || !Product_Type) throw { message: 'Data Must Be Filled' };
            if (!images) throw { message: 'Select Images First!' };

            let data = {
                Name,
                Price,
                Description,
                Qty,
                Category_ID,
                Product_Type
            };

            let dataToSend = JSON.stringify(data);
            console.log(dataToSend);

            let fd = new FormData();
            fd.append('data', dataToSend);
            fd.append('Image', images[0]);

            console.log([...fd]);
            Axios.post('http://localhost:2004/admin/addProduct', fd)
                .then((res) => {
                    alert('Add Data Success!');
                    setOpenModal(false);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            setImagesErrorMessage(error.message);
        }
    };

    return (
        <>
            <input type="button" value="+ Add Product" onClick={() => setOpenModal(true)} className='addbtn' />
            <Modal toggle={() => setOpenModal(false)} isOpen={openModal}>
                <ModalBody>
                    <div className="text-center mt-2 border-bottom border-dark border-1">
                        <h3>
                            Add Data Product
                        </h3>
                    </div>
                    <div className="mt-4 pb-3 px-3">
                        <h6>Product Name :</h6>
                        <input
                            placeholder="Product Name"
                            onChange={(val) => onFill(val, 'ProductName')}
                            name='addPrdctName'
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className="pb-3 px-3">
                        <h6>Price :</h6>
                        <input
                            placeholder="Price"
                            onChange={(val) => onFill(val, 'ProductPrice')}
                            name='addPrdctPrice'
                            type='number'
                            className='form-control'
                        />
                    </div>
                    <div className="pb-3 px-3">
                        <h6>Description (max 1000 character) :</h6>
                        {/* <input
                            onChange={(val) => onFill(val, 'ProductDesc')}
                            name='addPrdctDescription'
                            type='text'
                            className='form-control'
                            style={{ height: '100px' }}
                        /> */}
                        <textarea
                            className="form-control"
                            placeholder="Description"
                            id="description"
                            maxLength='1000'
                            style={{ height: '75px' }}
                            onChange={(val) => onFill(val, 'ProductDesc')}
                        ></textarea>
                    </div>
                    <div className="category-type row px-3">
                        <div className="pb-3 col">
                            <h6>Category :</h6>
                            <select
                                onChange={(val) => onFill(val, 'ProductCategory')}
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
                        </div>
                        <div className="pb-3 col">
                            <h6>Product Type :</h6>
                            <select
                                onChange={(val) => onFill(val, 'ProductType')}
                                name='addPrdctCategory'
                                className='form-control'>
                                <option value='' hidden>Type</option>
                                <option value='1'>Raw Material</option>
                                <option value='2'>Product</option>
                            </select>
                        </div>
                    </div>
                    <div className="pb-3 px-3">
                        <h6>Quantity :</h6>
                        <input
                            placeholder="Quantity"
                            onChange={(val) => onFill(val, 'ProductQty')}
                            name='addPrdctQty'
                            type='number'
                            className='form-control'
                        />
                    </div>
                    <div className='ps-3'>
                        <h6>Select Images :</h6>
                    </div>
                    <div className="row border px- py-3 mx-3 rounded">
                        <div className="col-6">
                            <div>
                                <input
                                    onChange={onImagesValidation}
                                    accept="image/*"
                                    name='addPrdctImage'
                                    type='file'
                                    className='form-control'
                                    ref={imageInput}
                                    style={{ display: 'none' }}
                                />
                                <button
                                    onClick={() => imageInput.current.click()}
                                    className='add-submit-btn btn-lg'
                                >Add Image</button>
                            </div>
                        </div>
                        <div className="col-6">
                            {
                                totalFile ?
                                    totalFile + 'Files Selected'
                                    :
                                    'No File Chosen'
                            }
                        </div>
                    </div>
                    <div>
                        <h6>
                            {
                                imagesErrorMessage ?
                                    <>
                                        <p className='mx-3 mt-4 text-danger'>
                                            {imagesErrorMessage}  !!
                                        </p>
                                    </>
                                    :
                                    null
                            }
                        </h6>
                    </div>
                    <div className="my-4 mx-3">
                        {/* <input type="button" value="Submit Data" onClick={onSubmitData} className="product-submit-btn py-1 w-100" /> */}
                        <button className="product-submit-btn py-1 w-100" onClick={onSubmitData}>Submit Data</button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};