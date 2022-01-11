import React from "react";
import "./LandingPage.css";
import { API_URL } from "../../Supports/Constants/UrlAPI";

const Doctors = () => {
  return (
    <div className="white-card-container" id="doctors">
      <div className="card-description">
        <h1> Dokter</h1>
        <p>Lihat Jadwal Praktik Disini!</p>
      </div>
      <div className="doctor-wrapper">
        {/* //////// left */}
        <div className="left-side">
          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor1"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-rovina-sp-pd-1b.jpg"
                  alt=""
                />
                <h3>Prof. dr. Rovina, Sp.PD, Ph.D</h3>
              </div>
            </a>
          </div>

          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor2"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-idrus-alwi-sp-pd.jpg"
                  alt=""
                />
                <h3>
                  Prof. Dr. dr. Idrus Alwi, Sp.PD-KKV, FINASIM, FACC, FESC,
                  FAPSIC
                </h3>
              </div>
            </a>
          </div>
          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor3"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-marcellus-simadibrata-sp-pd.jpg"
                  alt=""
                />
                <h3>Prof. Dr. dr. Marcellus Simadibrata, Sp.PD-KGEH, Ph.D</h3>
              </div>
            </a>
          </div>
        </div>

        {/* ////////// Right */}
        <div className="right-side">
          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor4"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-dr-rusdi-lamsudin-sp-s-m-med-sc-4c.jpg"
                  alt=""
                />
                <h3>rof. Dr. dr. Rusdi Lamsudin, Sp.S(K), M.Med.</h3>
              </div>
            </a>
          </div>

          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor5"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-dr-lucky-aziza-bawazier-sp-pd-kgh-1a.jpg"
                  alt=""
                />
                <h3>Dr.dr. Uly Indrasari, Sp.S M.Med</h3>
              </div>
            </a>
          </div>
          <div className="doctor-services">
            <a href={API_URL + "/doctors/doctor6"}>
              <div className="doctor-service">
                <img
                  src="https://cms.sehatq.com/cdn-cgi/image/width=80,height=80,f=auto/public/img/doctor_img/prof-dr-dr-hasan-sjahrir-sp-s.jpg"
                  alt=""
                />
                <h3>Prof. Dr. dr. Hasan Sjahrir, Sp.S(K) M.Med</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
