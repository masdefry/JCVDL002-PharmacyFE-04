import React from "react";
import "./Hospitals.css";

const Hospital2 = () => {
  return (
    <div>
      <div className="hospital-wrapper">
        <div className="hospital-description">
          <div className="left-description">
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/mitra-keluarga-bekasi-barat-HCFH00000152.jpg"
              alt=""
            />
          </div>
          <div className="right-description">
            <h3>
              RS Mitra Keluarga Tangerang
              <img
                className="partner-verified"
                src="https://static.sehatq.com/web/assets/img/partner.svg?v=6"
                alt=""
              />
            </h3>
            <h5> Rumah Sakit COVID-19</h5>
            <p> Karawaci, Kabupaten Tangerang</p>
          </div>
        </div>
        <div className="hospital-info">
          <h3>Jam Operasional</h3>
          <p>Senin - Minggu 00:00 - 23:59</p>
        </div>
        <div className="hospital-info">
          <h3>Alamat</h3>
          <p>
            Jl. Raya Legok - Karawaci No.20, Medang, Kec. Pagedangan, Kabupaten
            Tangerang, Banten 15810
          </p>
          <a href="https://www.mitrakeluarga.com/">Kunjungi Website Disini</a>
        </div>
      </div>
    </div>
  );
};

export default Hospital2;
