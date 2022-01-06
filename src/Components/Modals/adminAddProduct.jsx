import React, { useState, useRef } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Axios from 'axios';

export const AddProductModals = () => {

    const imageInput = useRef();

    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const [totalFile, setTotalFile] = useState(null);
    const [imagesErrorMessage, setImagesErrorMessage] = useState('');

    const [addProduct, setAddProduct] = useState({
        ProductName: '',
        ProductQty: 0,
        ProductPrice: 0,
        ProductDesc: '',
        ProductCategory: 0
    });


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
    };


    const onSubmitData = () => {
        console.log(images[0]);
        let Name = addProduct.ProductName;
        let Price = addProduct.ProductPrice;
        let Description = addProduct.ProductDesc;
        let Qty = addProduct.ProductQty;
        let Category_ID = addProduct.ProductCategory;

        console.log(addProduct);

        try {
            if (!Name || !Price || !Description || !Qty || !Category_ID) throw { message: 'Data Must Be Filled' };
            if (!images) throw { message: 'Select Images First!' };

            let data = {
                Name,
                Price,
                Description,
                Qty,
                Category_ID
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
            <input type="button" value="Add Product" onClick={() => setOpenModal(true)} className='addbtn' />
            <Modal toggle={() => setOpenModal(false)} isOpen={openModal}>
                <ModalBody>
                    <div className="text-center mt-2 border-bottom border-dark border-2">
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
                        <h6>Description (max 200 character) :</h6>
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
                            maxLength='200'
                            style={{ height: '75px' }}
                            onChange={(val) => onFill(val, 'ProductDesc')}
                        ></textarea>
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
                    <div className="pb-3 px-3">
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
                    <div>
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
                                        <p>Errornya di images</p>
                                        {imagesErrorMessage}
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