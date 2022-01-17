import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';
import '../../Supports/Stylesheets/Components/Cropper.css';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../React-Crop/cropImage';
import { dataURLtoFile } from '../React-Crop/dataUrlToFile';

export const CropImageModal = () => {
    const imageInput = useRef();

    const [imageSrc, setImageSrc] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [imageErrorMessage, setImageErrorMessage] = useState('');

    console.log(croppedImage);

    const onCropChange = (crop) => {
        console.log(crop);
        setCrop(crop);
    };

    const onZoomChange = (zoom) => {
        setZoom(zoom);
    };

    const onRotationChange = (rotation) => {
        setRotation(rotation);
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedAreaPixels);
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const onImagesValidation = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener('load', () => {
                setImageSrc(reader.result);
            });
            e.target.value = '';
        }
    };

    const onCroppedAreaPixels = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            );
            console.log('donee', { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [imageSrc, croppedAreaPixels, rotation]);

    const onUpload = async () => {
        const canvas = await getCroppedImg(
            imageSrc,
            croppedAreaPixels,
            rotation
        );
        const canvastoFile = new File([canvas], 'cropped-image.jpeg', { type: "image/jpeg" });

        try {
            const userdata = localStorage.getItem('userInfoToken');
            const userDataParse = JSON.parse(userdata);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': `${userDataParse.token}`
                }
            };

            const fd = new FormData();

            fd.append("Image", canvastoFile);
            Axios.post('http://localhost:2004/user/updateProfileImg', fd, config)
                .then((res) => {
                    alert('Add Profile Image Success!');
                    setOpenModal(false);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <button
                onClick={() => setOpenModal(true)}
                className='submit-btn btn-lg mx-auto mt-4'
            >Upload Image</button>
            <Modal toggle={() => setOpenModal(false)} isOpen={openModal} centered>
                <ModalHeader style={{ justifyContent: 'center' }}>
                    {imageSrc ?
                        <strong>Edit Foto</strong>
                        :
                        <strong>Upload Foto</strong>
                    }
                </ModalHeader>
                <ModalBody>
                    {imageSrc ?
                        <div>
                            <div className="crop-container">
                                <Cropper
                                    image={imageSrc}
                                    zoom={zoom}
                                    crop={crop}
                                    aspect={1 / 1}
                                    onCropChange={onCropChange}
                                    onZoomChange={onZoomChange}
                                    onRotationChange={setRotation}
                                    onCropComplete={onCropComplete}
                                    zoomWithScroll
                                />
                            </div>
                            <div className="controls">
                                <div className="button-area">
                                    <button onClick={onUpload}>Crop</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="input-imgSrc d-flex pb-5"
                            style={{ justifyContent: 'center' }}>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                ref={imageInput}
                                onChange={onImagesValidation} />
                            <button
                                onClick={() => imageInput.current.click()}
                                className='submit-btn btn-lg mx-auto mt-4'
                            >Upload Image</button>
                        </div>
                    }
                </ModalBody>
            </Modal>
        </>
    );
};

