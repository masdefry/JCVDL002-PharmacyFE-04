import React, { useState, useEffect } from "react";
import "./Product.css";
import { Footer } from "../../Components/Footer/Footer";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const token = localStorage.getItem("userInfoToken");
  const userState = JSON.parse(token);

  const [productData, setProductData] = useState([]);

  const [cartData, setCartData] = useState([]);
  const [productToCart, setProductToCart] = useState(1);

  const { SKU } = useParams();

  const fetchProductData = () => {
    Axios.get(API_URL + "/products").then((result) => {
      if (result.data.length) {
        const product = result.data.filter((val) => val.SKU === Number(SKU));
        setProductData(product[0]);
      }
    });
  };

  const fetchCartData = () => {
    Axios.get(API_URL + "/cart").then((result) => {
      if (result.data.length) {
        setCartData(result.data);
        console.log(cartData);
      }
    });
  };

  const plusToCart = () => {
    if (productToCart < productData.Qty) setProductToCart(productToCart + 1);
  };

  const minToCart = () => {
    if (productToCart > 1) {
      setProductToCart(productToCart - 1);
    }
  };

  const addToCartHandler = () => {
    if (!token) {
      alert("silahkan login terlibih dahulu");
    } else {
      let cartCheck = cartData.filter((val) => {
        return val.User_Id == userState.id && val.SKU == productData.SKU;
      });
      if (cartCheck.length) {
        alert("tambah barang ke keranjang berhasil");
        console.log(cartCheck[0]);
        Axios.post(`${API_URL}/cart`, {
          SKU: productData.SKU,
          User_Id: userState.id,
          Qty: cartCheck[0].Qty + productToCart,
        });
      } else {
        alert("tambah barang ke keranjang berhasil");
        Axios.post(`${API_URL}/cart`, {
          SKU: productData.SKU,
          User_Id: userState.id,
          Qty: productToCart,
        });
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  });

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      <div>
        <div className="product-detail-container">
          <div calssName="left-product-detail">
            <img
              className="product-detail-img"
              src={productData.Image}
              alt=""
            />
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

            <div class="add-to-cart-container">
              <div className="button-cart-number">
                <button onClick={minToCart}> - </button> <p>{productToCart} </p>
                <button onClick={plusToCart}> + </button>
              </div>
              <div className="button-cart-add">
                <button onClick={addToCartHandler}>+ Keranjang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
