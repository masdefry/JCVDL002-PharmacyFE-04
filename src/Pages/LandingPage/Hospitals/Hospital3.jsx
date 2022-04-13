import React from "react";
import "./Hospitals.css";

const Hospital3 = () => {
  return (
    <div>
      <div className="hospital-wrapper">
        <div className="hospital-description">
          <div className="left-description">
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/mayapada-hospitals-tangerang-banten-HCFH00000235.jpg"
              alt=""
            />
          </div>
          <div className="right-description">
            <h3>
              RS Mayapada Tangerang
              <img
                className="partner-verified"
                src="https://static.sehatq.com/web/assets/img/partner.svg?v=6"
                alt=""
              />
            </h3>
            <h5> Rumah Sakit (Tipe B)</h5>
            <p> Kec. Tangerang, Tangerang </p>
          </div>
        </div>
        <div className="hospital-info">
          <h3>Jam Operasional</h3>
          <p>Senin - Minggu 00:00 - 23:59</p>
        </div>
        <div className="hospital-info">
          <h3>Alamat</h3>
          <p>
            Modernland, Jl. Honoris Raya No.6, RT.001/RW.006, Klp. Indah, Kec.
            Tangerang, Kota Tangerang, Banten 15117
          </p>
          <a href="https://mayapadahospital.com/">Kunjungi Website Disini</a>
        </div>
      </div>
    </div>
  );
};

export default Hospital3;
