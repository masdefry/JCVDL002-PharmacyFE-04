import React from "react";
import { AfterRegisterComp } from "../../Components/Register/AfterRegisterComp";

import Family from '../../Supports/Assets/Sign/family.jpg';

const AfterRegister = () => {
    return (
        <div className='register-container m-5 p-5'>
            <div className='reg-form-container shadow row mx-auto'>
                <div className='img-container col p-0'>
                    <img src={Family} alt='Register' />
                </div>
                <div className='reg-input-form-container col p-5'>
                    <div className='daftar mb-5'>
                        <h3>Lengkapi data diri</h3>
                    </div>
                    <div className='form'>
                        <AfterRegisterComp />
                    </div>
                    <div className='have-account text-center'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AfterRegister;