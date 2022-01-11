import React from "react";
import "./LandingPage.css";
import { API_URL } from "../../Supports/Constants/UrlAPI";

const HospitalService = () => {
  return (
    <div className="card-container" id="hospitals">
      <div className="card-description">
        <h1> Fasilitas Kesehatan</h1>
        <p>Detail fasilitas kesehatan di sekitar kamu</p>
      </div>

      <div className="article-services">
        <div className="article-service">
          <a href={API_URL + "/hospitals/hospital1"}>
            <img
              src="https://cakapinterview.com/wp-content/uploads/2020/11/Eka-Hospital.jpg"
              alt=""
            />
            <h3>Eka Hospiral BSD</h3>
            <p>Serpong, Tangerang Selatan</p>
          </a>
        </div>

        <div className="article-service">
          <a href={API_URL + "/hospitals/hospital2"}>
            <img
              src="https://elma.mitrakeluarga.com/pluginfile.php/1/theme_klass/logo/1631685715/LOGO%20MITRA%202%20HIGH.png"
              alt=""
            />
            <h3> RS Mitra Keluarga Tangerang</h3>
            <p>Karawaci, Kabupaten Tangerang </p>
          </a>
        </div>

        <div className="article-service">
          <a href={API_URL + "/hospitals/hospital3"}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>RS Mayapada</h3>
            <p>Tangerang Selatan, Tangerang</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalService;
