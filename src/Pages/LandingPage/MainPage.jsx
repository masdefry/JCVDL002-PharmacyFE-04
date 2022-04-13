import React from "react";
import "./LandingPage.css";
import MenuItem from "./MenuItem";
import CovidService from "./CovidService";
import ArticleService from "./ArticleService";
import HospitalService from "./HospitalService";
import LoginPart from "./LoginPart";
import Doctors from "./Doctors";

const MainPage = () => {
  return (
    <div className="main-container">
      <div>
        <MenuItem />
        <CovidService />
        <ArticleService />
        <Doctors />
        <HospitalService />
        <LoginPart />
      </div>
    </div>
  );
};

export default MainPage;
