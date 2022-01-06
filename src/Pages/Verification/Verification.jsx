import React, { useState, useEffect } from 'react';
import '../../Supports/Stylesheets/Pages/Verif.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';
import { useParams } from 'react-router-dom';

import { Footer } from '../../Components/Footer/Footer';

import Sucess from '../../Supports/Assets/verifsucs.svg';

const VerificationPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    const token = params.token;
    console.log(token);

    const [message, setMessage] = useState('Loading');

    useEffect(() => {
        onVerification();
    }, []);

    const onVerification = () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`
                }
            };

            Axios.patch(
                `${API_URL}/user/verifyEmail`, {}, config
            )
                .then(res => {
                    setMessage('Success');
                });

        } catch (err) {
            console.log(err);
            throw err;
        };
    };

    const toLogin = () => {
        navigate('/login');
    };

    return (
        <div className="outer-verif">
            <div className="verif-container d-flex my-5 justify-content-lg-center">
                <div className="verify-content d-flex flex-column ">
                    {message === 'Loading' ?
                        <h1>Loading . . .</h1>
                        :
                        <div className="verif-success text-center">
                            <h1 className='mb-5 fw-bolder'>Verification Success</h1>
                            <img src={Sucess} alt="" />
                            <h3 className='mt-4'>Login untuk melakukan transaksi</h3>
                            <button className='verif-login' onClick={toLogin}>Login</button>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default VerificationPage;