import React, { useState, useEffect } from "react";
import "../../Supports/Stylesheets/Components/NotifComp.css";
import { useNavigate } from "react-router-dom";

const CartComp = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("");

  const token = localStorage.getItem("userInfoToken");
  useEffect(() => {
    if (token) {
      navigate("/cart");
    }
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="notification-container col border">
      <div className="notification-header mx-auto row text-center">
        <p>Keranjang</p>
      </div>
      <div className="notification-body">
        <div className="no-notif d-flex flex-column align-items-center text-center py-5">
          <img src="https://static.sehatq.com/tokoq/img/new-cart.svg?v=5" />
          <p>
            <strong>Keranjang Masih Kosong</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
