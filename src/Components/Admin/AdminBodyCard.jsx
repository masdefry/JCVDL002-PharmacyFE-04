import React, { useEffect, useState } from "react";
import '../../Supports/Stylesheets/Pages/Admin.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

export const AdminBodyCard = () => {
    useEffect(() => {
        fetchProduct();
    }, []);

    const [productList, setProductList] = useState([]);

    console.log(productList);

    const fetchProduct = () => {
        Axios.get(`${API_URL}/admin/fetchProduct`)
            .then((result) => {
                setProductList(result.data.data);
                // console.table(result.data.data);
            })
            .catch(() => {
                alert('fetchProduct gagal');
            });
    };

    return productList.map((val) => {
        <tr>
            <td>{val.SKU}</td>
            <td>{val.Name}</td>
            <td>{val.Price}</td>
            <td>{val.Description}</td>
            <td>{val.Category_ID}</td>
            <td>
                <img src={val.Image} className="admin-product-img" alt="" />
            </td>
            <td>
                <button
                    onClick={() => this.editToggle(val)}
                    className="btn btn-secondary"
                >
                    Edit
                </button>
            </td>
            <td>
                <button
                    onClick={() => this.deleteBtnHandler(val.id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>;
    });
};