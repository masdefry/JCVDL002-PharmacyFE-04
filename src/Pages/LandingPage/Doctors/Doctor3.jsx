import React from "react";
import "./Doctors.css";
import Hospital2 from "../Hospitals/Hospital2";

const Doctor3 = () => {
  return (
    <div>
      <div className="doctor-wrapper">
        <div className="doctor-card">
          <div>
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=130,fit=pad,background=white,quality=100/public/img/doctor_img/prof-dr-marcellus-simadibrata-sp-pd.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>Prof. Dr. dr. Marcellus Simadibrata, Sp.PD-KGEH, Ph.D</h1>
          </div>
          <div>
            <h4>Dokter Spesialis COVID-19</h4>
            <h3>📱 0821-1949-7723 </h3>
          </div>
        </div>
      </div>

      <div className="doctor-extra">
        <h1>Tempat Bertugas</h1>
      </div>
      <Hospital2 />
    </div>
  );
};

export default Doctor3;
