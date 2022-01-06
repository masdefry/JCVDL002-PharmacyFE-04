import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const AfterRegisterComp = () => {
    const dispatch = useDispatch();
    const CompleteData = useSelector;

    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();

    };

    return (
        <form className='form-container d-grid mx-3'  >
            <div className='form-group my-3'>
                <label className='mb-2' htmlFor='Gender'>
                    Jenis Kelamin
                </label>
                <select
                    onChange={(e) => setGender(e.target.value)}
                    name="addPrdctCategory"
                    className="form-control"
                >
                    <option value="" hidden>Jenis Kelamin</option>
                    <option value="man">Laki laki</option>
                    <option value="woman">Perempuan</option>
                </select>
            </div>
            <div className='form-group my-3'>
                <label className='mb-2' htmlFor='birthDate'>
                    Birthday
                </label>
                <input
                    type='date'
                    className='form-control'
                    id='birthDate'
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </div>
            <label className='form-label mt-3' htmlFor='Phone'>
                Phone
            </label>
            <div className='input-group mb-4'>
                <span className="input-group-text" id="Phone">+62</span>
                <input
                    type='text'
                    className='form-control'
                    id='Phone'
                    placeholder='Phone'
                    aria-describedby="Phone"
                    onChange={(e) => setPhone(0 + e.target.value)}
                />
            </div>
            <label className='form-label mt-3' htmlFor='Weight'>
                Berat
            </label>
            <div className='input-group mb-4'>
                <input
                    type='number'
                    className='form-control'
                    id='Weight'
                    placeholder='Berat badan'
                    onChange={(e) => setWeight(e.target.value)}
                />
                <span className="input-group-text" id="Weight">Kg</span>
            </div>
            <label className='form-label mt-3' htmlFor='Height'>
                Tinggi
            </label>
            <div className='input-group mb-4'>
                <input
                    type='number'
                    className='form-control'
                    id='Height'
                    placeholder='Tinggi badan'
                    onChange={(e) => setHeight(e.target.value)}
                />
                <span className="input-group-text" id="Height">Cm</span>
            </div>
            <button className='submit-btn btn-lg mt-5' type='submit'>
                Tambah Data
            </button>
        </form>
    );
};