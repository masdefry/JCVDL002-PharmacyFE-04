import React from "react";
import "./LandingPage.css";
import { API_FE } from "../../Supports/Constants/UrlAPI";

const CovidService = () => {
  return (
    <div className="card-container">
      <div className="card-description">
        <h1> Layanan Covid Sehat</h1>
        <p>
          Cegah dan hadapi pandemi Covid-19 dengan beragam solusi hidup sehat
          hanya di SehatY.
        </p>
      </div>

      <div className="covid-services">
        <a href={`${API_FE}/products`}>
          <div className="covid-service">
            <img
              src="https://www.sehatq.com/public/img/corona-helpline/produk-kesehatan.svg"
              alt=""
            />
            <h3>Beli Produk Kesehatan</h3>
          </div>
        </a>
        <a href={API_FE + "/doctors/doctor3"}>
          <div className="covid-service">
            <img
              src="https://www.sehatq.com/public/img/corona-helpline/telemed.svg"
              alt=""
            />
            <h3>Konsultasi Dokter</h3>
          </div>
        </a>
        <a href={API_FE + "/hospitals/hospital2"}>
          <div className="covid-service">
            <img
              src="https://www.sehatq.com/public/img/corona-helpline/home-service.svg"
              alt=""
            />
            <h3>Layanan RS Kesehatan</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CovidService;
