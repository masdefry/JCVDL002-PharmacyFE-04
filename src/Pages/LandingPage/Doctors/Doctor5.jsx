import React from "react";
import "./Doctors.css";
import Hospital3 from "../Hospitals/Hospital3";

const Doctor5 = () => {
  return (
    <div>
      <div className="doctor-wrapper">
        <div className="doctor-card">
          <div>
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=130,fit=pad,background=white,quality=100/public/img/doctor_img/prof-dr-dr-lucky-aziza-bawazier-sp-pd-kgh-1a.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>dr. Uly Indrasari, Sp.S</h1>
          </div>
          <div>
            <h4> Dokter Spesialis Saraf</h4>
            <h3>📱 0821-1949-7723 </h3>
          </div>
        </div>
      </div>

      <div className="doctor-extra">
        <h1>Tempat Bertugas</h1>
      </div>
      <Hospital3 />
    </div>
  );
};

export default Doctor5;
