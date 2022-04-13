import React from "react";
import "./Doctors.css";
import Hospital3 from "../Hospitals/Hospital3";
import { Footer } from "../../../Components/Footer/Footer";

const Doctor2 = () => {
  return (
    <div>
      <div className="doctor-wrapper">
        <div className="doctor-card">
          <div>
            <img
              src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=130,fit=pad,background=white,quality=100/public/img/doctor_img/prof-dr-idrus-alwi-sp-pd.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>
              Prof. Dr. dr. Idrus Alwi, Sp.PD-KKV, FINASIM, FACC, FESC, FAPSIC
            </h1>
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
      <Hospital3 />
      <Footer />
    </div>
  );
};

export default Doctor2;
