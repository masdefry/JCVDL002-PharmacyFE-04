import React from "react";
import "./Doctors.css";
import Hospital1 from "../Hospitals/Hospital1";
import { Footer } from "../../../Components/Footer/Footer";

const Doctor6 = () => {
  return (
    <div>
      <div className="doctor-wrapper">
        <div className="doctor-card">
          <div>
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=130,fit=pad,background=white,quality=100/public/img/doctor_img/prof-dr-dr-hasan-sjahrir-sp-s.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>Prof. Dr. dr. Hasan Sjahrir, Sp.S(K)</h1>
          </div>
          <div>
            <h4>Dokter Spesialis Saraf</h4>
            <h3>📱 0821-1949-7723 </h3>
          </div>
        </div>
      </div>

      <div className="doctor-extra">
        <h1>Tempat Bertugas</h1>
      </div>
      <Hospital1 />
      <Footer />
    </div>
  );
};

export default Doctor6;
