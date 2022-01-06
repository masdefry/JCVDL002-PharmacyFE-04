import React from 'react';
import '../../Supports/Stylesheets/Components/Cards.css';

export const AddressCard = () => {
    return (
        <div className="address-card-container mx-3 my-3">
            <div className="address-card-body mx-1 py-3 px-4 shadow-sm row">
                <div className="address-detail col">
                    <h5>Address Label</h5>
                    <h4>Recipient Name</h4>
                    <p>Recipient Phone</p>
                    <p>Address-Detail</p>
                </div>
                <div className="address-action col" align='end'>
                    <button
                    >Pilih</button>
                </div>
            </div>
        </div>
    );
};