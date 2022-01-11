import React, { useEffect, useState } from "react";
import '../../Supports/Stylesheets/Pages/Admin.css';
import Axios from 'axios';
import { API_URL } from '../../Supports/Constants/UrlAPI';

import { EditProductModals } from "../Modals/adminEditProduct";
import { DeleteProductModal } from "../Modals/deleteProduct";
import { ProductDetailModal } from "../Modals/productDetail";

export const AdminBodyCard = (props) => {
    console.log(props.category);
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

    const format = (money) => {
        let formatMoney = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(money);
        return formatMoney;
    };

    return productList.map((val) => {
        if (val.Category_ID.toLowerCase().includes(props.category) && val.Name.toLowerCase().includes(props.product))
            return (
                <tr className="text-center">
                    <td>{val.SKU}</td>
                    <td>{val.Name}</td>
                    <td>{format(val.Price)}</td>
                    <td><img src={val.Image} alt="" /></td>
                    <td>
                        <ProductDetailModal product={val} />
                        <EditProductModals product={val} />
                        <DeleteProductModal data={val} />
                    </td>
                </tr>
            );
    });
};