import React from "react";
import "./Doctors.css";
import Hospital1 from "../Hospitals/Hospital1";

const Doctor1 = () => {
  return (
    <div>
      <div className="doctor-wrapper">
        <div className="doctor-card">
          <div>
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=130,fit=pad,background=white,quality=100/public/img/doctor_img/prof-dr-rovina-sp-pd-1b.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>Prof. dr. Rovina, Sp.PD, Ph.D</h1>
          </div>
          <div>
            <h4>Dokter Spesialis Penyakit Dalam</h4>
            <h3>📱 0821-1949-7723 </h3>
          </div>
        </div>
      </div>

      <div className="doctor-extra">
        <h1>Tempat Bertugas</h1>
      </div>
      <Hospital1 />
    </div>
  );
};

export default Doctor1;
