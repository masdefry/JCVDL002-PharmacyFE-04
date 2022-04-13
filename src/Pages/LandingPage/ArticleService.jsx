import React from "react";
import "./LandingPage.css";
import { API_FE } from "../../Supports/Constants/UrlAPI";

const ArticleService = () => {
  return (
    <div className="card-container" id="articles">
      <div className="card-description">
        <h1> Update Seputar Kesehatan</h1>
        <p>Informasi akurat dari ahlinya</p>
      </div>

      <div className="article-services">
        <div className="article-service">
          <a href={API_FE + "/articles/article1"}>
            <img
              src="https://cms.sehatq.com/public/img/article_thumb/manfaat-air-lemon-dingin-untuk-turunkan-berat-badan-dan-faktanya-thumb-1602955110.jpg"
              alt=""
            />
            <h3>Manfaat Lemon Dingin Untuk Turunkan Berat Badan</h3>
          </a>
        </div>

        <div className="article-service">
          <a href={API_FE + "/articles/article2"}>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-oatmeal-bowl-with-banana-blueberries-royalty-free-image-1619015007.?crop=0.806xw:1.00xh;0.0749xw,0&resize=640:*"
              alt=""
            />
            <h3>7 Manfaat Sarapan Pagi Bagi Anak Sekolah</h3>
          </a>
        </div>

        <div className="article-service">
          <a href={API_FE + "/articles/article3"}>
            <img
              src="https://cms.sehatq.com/public/img/article_thumb/manfaat-dan-jenis-probiotik-untuk-mengatasi-diare-thumb-1639558252.jpg"
              alt=""
            />
            <h3>Manfaat dan Jenis Probiotik Untuk Mengatasi Diare</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleService;
