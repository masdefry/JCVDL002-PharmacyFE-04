import React, { useState, useEffect } from "react";
import "../../Supports/Stylesheets/Components/NotifComp.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Supports/Constants/UrlAPI";
import Axios from "axios";

export const CartComp = () => {
  const token = localStorage.getItem("userInfoToken");
  const userState = JSON.parse(token);

  const [cartData, setCartData] = useState([]);
  const [isCheckout, setCheckout] = useState(false);
  const [isShipping, setShipping] = useState(0);
  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const fetchCartData = () => {
    Axios.get(API_URL + "/cart").then((result) => {
      console.log(result.data);
      setCartData(result.data);
    });
  };

  const fetchProductData = () => {
    Axios.get(API_URL + "/products").then((result) => {
      setProductList(result.data);
    });
  };

  let userCart = cartData.filter((val) => {
    return val.User_Id == userState.id;
  });

  const deleteCartHandler = (Cart_Id) => {
    Axios.delete(`${API_URL}/cart/${Cart_Id}`);
    fetchCartData();
  };

  const renderSubTotal = () => {
    let subTotal = 0;
    for (let i = 0; i < userCart.length; i++) {
      subTotal += userCart[i].Price * userCart[i].Qty;
    }
    return subTotal;
  };

  const renderTotalPrice = () => {
    const totalPrice = renderSubTotal() + isShipping;
    return totalPrice;
  };

  const recipientHandler = (event) => {
    setRecipientName(event.target.value);
  };

  const adressHandler = (event) => {
    setAddress(event.target.value);
  };

  const afterTransaction = () => {
    const selProduct = productList.filter((val) => {
      return userCart.filter((values) => {
        return val.SKU == values.SKU;
      });
    });

    selProduct.forEach((val) => {
      userCart.forEach((values) => {
        Axios.post(API_URL + "/cart/aftertransaction", {
          SKU: values.SKU,
          Qty: val.Qty - values.Qty,
        });
      });
    });
  };

  const payButtonHandler = () => {
    Axios.post(API_URL + "/cart/transaction", {
      User_Id: userState.id,
      address: address,
      recipientName: recipientName,
      totalPrice: parseInt(renderTotalPrice()),
      transactionItems: JSON.stringify(userCart),
    }).then((results) => {
      afterTransaction();

      userCart.forEach((val) => {
        deleteCartHandler(val.Cart_Id);
        alert("Transaksi anda berhasil");
        setCheckout(false);
      });
      window.location.reload();
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "payments");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/albertbonar/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
    console.log(file.secure_url);
  };

  ///////////////////
  const shippingHandler1 = () => {
    setShipping(18000);
  };
  const shippingHandler2 = () => {
    setShipping(20000);
  };
  const shippingHandler3 = () => {
    setShipping(24000);
  };

  /////////////////

  useEffect(() => {
    fetchCartData();
    fetchProductData();
  }, []);

  const renderCart = () => {
    return userCart.map((val) => {
      return (
        <tr>
          <td>{val.Name}</td>
          <td>Rp{val.Price.toLocaleString("id")}</td>
          <td>
            <img
              src={val.Image}
              alt=""
              style={{ height: "4rem", width: "4rem" }}
            />
          </td>
          <td>{val.Qty}</td>
          <td>Rp{(val.Qty * val.Price).toLocaleString("id")}</td>
          <td>
            <button
              onClick={() => {
                deleteCartHandler(val.Cart_Id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderCheckout = () => {
    setCheckout(true);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-8 text-center mt-5">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody> {renderCart()} </tbody>
          <tfoot className="bg-light">
            <tr>
              <td colSpan="6">
                <button onClick={renderCheckout} className="btn btn-success">
                  Checkout
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* ///////////////////// */}
      {isCheckout ? (
        <div className="col-6 p-3 m-3">
          {/* Form Checkout */}
          <div className="card text-left">
            <div className="card-header">
              <strong>Order Summary</strong>
            </div>
            <div className="card-body">
              <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                <span className="font-weight-bold">Subtotal Price</span>
                <span>Rp{renderSubTotal()}</span>
              </div>
              <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                <span className="font-weight-bold">Shipping </span>
                <span>Rp{isShipping}</span>
              </div>
              <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                <span className="font-weight-bold">Total Price</span>
                <span>Rp{renderTotalPrice()}</span>
              </div>
            </div>
            <div className="card-body border-top">
              <label htmlFor="recipientName">Recipient Name</label>
              <input
                // onChange={this.inputHandler}
                onChange={recipientHandler}
                type="text"
                className="form-control mb-3"
                name="recipientName"
              />
              <label htmlFor="address">Address</label>
              <input
                onChange={adressHandler}
                type="text"
                className="form-control"
                name="address"
              />
              <div>
                <div className="mb-0 p-1">
                  <span className="mb-0">Shipping</span>
                </div>

                <button
                  onClick={shippingHandler1}
                  className="btn btn-info m-2 "
                >
                  <span>JNT</span>
                </button>
                <button onClick={shippingHandler2} className="btn btn-info m-1">
                  <span>JNA</span>
                </button>
                <button onClick={shippingHandler3} className="btn btn-info m-1">
                  <span>SI CEPAT</span>
                </button>
                <button onClick={shippingHandler2} className="btn btn-info m-1">
                  <span>GOJEK</span>
                </button>
                <button onClick={shippingHandler1} className="btn btn-info m-1">
                  <span>GRAB</span>
                </button>
              </div>
            </div>
            <div className="card-footer">
              <div className="mb-2 p-1">
                <strong className="mb-2">Upload Bukti Pembayaran</strong>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <input
                  // onChange={this.inputHandler}
                  className="form-control mx-1"
                  type="file"
                  name="payment"
                  accept="image/*"
                  onChange={uploadImage}
                />
                <button
                  onClick={payButtonHandler}
                  className="btn btn-success mx-1"
                >
                  kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* ////////////////////// */}
    </div>
  );
};


// const token = localStorage.getItem("userInfoToken");
// useEffect(() => {
//   if (token) {
//     navigate("/cart");
//   }
//   if (!token) {
//     navigate("/login");
//   }
// }, []);

// <div className="notification-container col border">
//   <div className="notification-header mx-auto row text-center">
//     <p>Keranjang</p>
//   </div>
//   <div className="notification-body">
//     <div className="no-notif d-flex flex-column align-items-center text-center py-5">
//       <img src="https://static.sehatq.com/tokoq/img/new-cart.svg?v=5" />
//       <p>
//         <strong>Keranjang Masih Kosong</strong>
//       </p>
//     </div>
//   </div>
// </div>
