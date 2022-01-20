import React, { useEffect, useState } from "react";
import '../../Supports/Stylesheets/Pages/Admin.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { EditProductModals } from "../Modals/adminEditProduct";
import { DeleteProductModal } from "../Modals/deleteProduct";
import { ProductDetailModal } from "../Modals/productDetail";

export const AdminBodyCard = (props) => {
    console.log(props.category);
    // useEffect(() => {
    //     fetchProduct();
    // }, []);

    // const [productList, setProductList] = useState([]);

    // console.log(productList);

    // const fetchProduct = () => {
    //     Axios.get(`${API_URL}/admin/fetchProduct`)
    //         .then((result) => {
    //             setProductList(result.data.data);
    //             // console.table(result.data.data);
    //         })
    //         .catch(() => {
    //             alert('fetchProduct gagal');
    //         });
    // };

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
        return formatMoney;
    };

    return (
        <tr className="text-center">
            <td>{props.productData.SKU}</td>
            <td>{props.productData.Name}</td>
            <td>{format(props.productData.Price)}</td>
            <td><img src={props.productData.Image} alt="" /></td>
            <td>
                <ProductDetailModal product={props.productData} />
                <EditProductModals product={props.productData} />
                <DeleteProductModal data={props.productData} />
            </td>
        </tr>
    );
};