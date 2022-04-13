import React from "react";
import "./Hospitals.css";

const Hospital1 = () => {
  return (
    <div>
      <div className="hospital-wrapper">
        <div className="hospital-description">
          <div className="left-description">
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/eka-hospital-bsd-tangerang-selatan-HCFH00000231.jpg"
              alt=""
            />
          </div>
          <div className="right-description">
            <h3>
              Eka Hospital BSD
              <img
                className="partner-verified"
                src="https://static.sehatq.com/web/assets/img/partner.svg?v=6"
                alt=""
              />
            </h3>
            <h5> Rumah Sakit (Tipe B)</h5>
            <p> Serpong, Tangerang Selatan</p>
          </div>
        </div>
        <div className="hospital-info">
          <h3>Jam Operasional</h3>
          <p>Senin - Minggu 00:00 - 23:59</p>
        </div>
        <div className="hospital-info">
          <h3>Alamat</h3>
          <p>
            Central Business District Lot. IX, Jl. Boulevard BSD Timur, Lengkong
            Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15321
          </p>
          <a href="https://www.ekahospital.com/id">Kunjungi Website Disini</a>
        </div>
      </div>
    </div>
  );
};

export default Hospital1;
