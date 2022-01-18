import React from "react";
import Carousel from "./Carousel";
import MainPage from "./MainPage";
import { Footer } from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <MainPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
