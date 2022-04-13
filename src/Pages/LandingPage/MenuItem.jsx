import React from "react";
import "./LandingPage.css";
import { API_FE } from "../../Supports/Constants/UrlAPI";

const MenuItem = () => {
  const URL_OBAT =
    "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=54,height=54,fit=pad,quality=100/public/img/revamp_icon/feature_icon_drug_active.png?v=6";
  const URL_ARTIKEL =
    "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=54,height=54,fit=pad,quality=100/public/img/revamp_icon/feature_icon_article_active.png?v=6";
  const URL_DOKTER =
    "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=54,height=54,fit=pad,quality=100/public/img/revamp_icon/feature_icon_hcp_active.png?v=6";
  const URL_KONSULTASI =
    "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=54,height=54,fit=pad,quality=100/public/img/revamp_icon/feature_icon_telemed_active.png?v=6";
  const URL_FAQ =
    "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=54,height=54,fit=pad,quality=100/public/img/revamp_icon/feature_icon_procedure_active.png?v=6";

  return (
    <div className="menu-items d-flex mx-auto mt-4">
      <a href={`${API_FE}/products`}>
        <div className="menu-item">
          <img src={URL_OBAT} alt="obat" />
          <h3> Obat</h3>
        </div>
      </a>
      <a href="#articles">
        <div className="menu-item">
          <img src={URL_ARTIKEL} alt="obat" />
          <h3> Artikel</h3>
        </div>
      </a>
      <a href="#doctors">
        <div className="menu-item">
          <img src={URL_DOKTER} alt="obat" />
          <h3> Dokter</h3>
        </div>
      </a>
      <a href="#doctors">
        <div className="menu-item">
          <img src={URL_KONSULTASI} alt="obat" />
          <h3> Konsultasi</h3>
        </div>
      </a>
      <a href="#hospitals">
        <div className="menu-item">
          <img src={URL_FAQ} alt="obat" />
          <h3> RS</h3>
        </div>
      </a>
    </div>
  );
};

export default MenuItem;
