import React, { useState, useEffect } from "react";
import "./Product.css";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productData, setProductData] = useState({});
  const [productNotFound, setProductNotFound] = useState(false);

  const { SKU } = useParams();

  const fetchProductData = () => {
    Axios.get(API_URL + "/products").then((result) => {
      if (result.data.length) {
        const product = result.data.filter((val) => val.SKU === Number(SKU));
        setProductData(product[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  });

  return (
    <div>
      <div className="product-detail-container">
        <div calssName="left-product-detail">
          <img className="product-detail-img" src={productData.Image} alt="" />
        </div>
        <div className="right-product-detail">
          <div className="product-detail-name bottom-grey-line">
            <h4> {productData.Name} </h4>
          </div>

          <div className="product-detail-price bottom-grey-line">
            <h5>Harga Produk</h5>
            <h4>Rp{productData.Price}</h4>
          </div>

          <div className="product-detail-stock bottom-grey-line">
            <h5>Jumlah Produk</h5>
            <h4>{productData.Qty}</h4>
          </div>

          <div className="product-detail-description bottom-grey-line">
            <h4>Deskripsi Produk</h4>
            <p>{productData.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
