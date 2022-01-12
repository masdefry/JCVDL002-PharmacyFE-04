import React from "react";
import "./LandingPage.css";
import { API_FE } from "../../Supports/Constants/UrlAPI";

const LoginPart = () => {
  return (
    <div className="white-card-container">
      <div className="card-description">
        <h1> #SehatdariSekarang dengan Asisten Kesehatan bagi Keluargamu</h1>
        <p>Jadilah bagian dari SehatY untuk dapatkan pelayanan lainya!</p>
      </div>

      <div className="covid-services">
        <a href={API_FE + "/register"}>
          <div className="covid-service">
            <img
              src="https://www.sehatq.com/public/img/icon/profile.svg"
              alt=""
            />
            <h3>Daftar Sekarang!</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginPart;
