import React, { useState, useRef } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Axios from 'axios';

export const PrescriptionModals = () => {

    const imageInput = useRef();

    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState(null);
    const [totalFile, setTotalFile] = useState(null);
    const [imagesErrorMessage, setImagesErrorMessage] = useState('');

    const [addPrescription, setAddPrescription] = useState({
        DoctorName: '',
        DeseaseType: '',
        Description: '',
        ProductCategory: 0
    });


    const onImagesValidation = (e) => {
        const files = e.target.files;
        console.log(files);
        try {
            if (files.length > 1) throw { message: 'Select 1 Images Only!' };

            for (let i = 0; i < files.length; i++) {
                if (files[i].size > 1000000) throw { message: `${files[i].name} More Than 1Mb` };
            }

            setImages(files);
            setImagesErrorMessage('');
            setTotalFile(files.length);

        } catch (error) {
            setImagesErrorMessage(error.message);
        }
    };

    const onFill = (val, dataType) => {
        if (dataType === 'DoctorName') {
            setAddPrescription({ ...addPrescription, DoctorName: val });
        }
        if (dataType === 'DeseaseType') {
            setAddPrescription({ ...addPrescription, DeseaseType: val });
        }
        if (dataType === 'Description') {
            setAddPrescription({ ...addPrescription, Description: val });
        }
    };


    const onSubmitData = () => {
        console.log(images);
        let Doctor_Name = addPrescription.DoctorName;
        let Desease_Type = addPrescription.DeseaseType;
        let Description = addPrescription.Description;

        try {
            if (!Doctor_Name || !Desease_Type || !Description) throw { message: 'Data Must Be Filled' };
            if (!images) throw { message: 'Select Images First!' };

            let data = {
                Doctor_Name,
                Desease_Type,
                Description,
            };

            let dataToSend = JSON.stringify(data);
            console.log(dataToSend);

            let fd = new FormData();
            fd.append('data', dataToSend);
            fd.append('Image', images);

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
            <button id='prescription-btn' className='prescription-btn' onClick={() => setOpenModal(true)}>Upload Resep</button>
            {/* <input type="button" value="Add Product" onClick={() => setOpenModal(true)} className='prescription-btn' /> */}
            <Modal toggle={() => setOpenModal(false)} isOpen={openModal} centered>
                <ModalBody>
                    <div className="text-center mt-2 opacity-75 border-dark border-2">
                        <h3>
                            Upload Resep Dokter
                        </h3>
                    </div>
                    <div className="form-floating mt-4 pb-3 px-3">
                        <input
                            placeholder="Nama Dokter"
                            onChange={(val) => onFill(val, 'DoctorName')}
                            name='doctorName'
                            type='text'
                            className='form-control'
                        />
                        <label className='px-4 py-auto' htmlFor="doctorName">Nama Dokter</label>
                    </div>
                    <div className="form-floating pb-3 px-3">
                        <input
                            placeholder="Jenis Penyakit"
                            onChange={(val) => onFill(val, 'DeseaseType')}
                            name='addPrdctPrice'
                            type='text'
                            className='form-control'
                        />
                        <label className='px-4 py-auto' htmlFor="deseaseType">Jenis Penyakit</label>
                    </div>
                    <div className="form-floating pb-3 px-3">
                        <textarea
                            className="form-control"
                            placeholder="Keterangan"
                            id="prescriptionDesc"
                            style={{ height: '125px' }}
                            onChange={(val) => onFill(val, 'Description')}
                        ></textarea>
                        <label className='px-4 py-auto' htmlFor="prescriptionDesc">Keterangan</label>
                    </div>
                    <div className='ms-3'>
                        <h6>Foto Resep :</h6>
                    </div>
                    <div className="row border py-3 mx-3 rounded">
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
                                    imagesErrorMessage
                                    :
                                    null
                            }
                        </h6>
                    </div>
                    <div className="my-4 mx-3">
                        <input type="button" value="Submit Data" onClick={() => onSubmitData()} className="product-submit-btn py-1 w-100" />
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};