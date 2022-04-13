import React, { Component } from "react";
import "./LandingPage.css";
import Slider from "react-slick";
import images1 from "./images/images1.jpeg";
import images2 from "./images/images2.jpeg";
import images3 from "./images/images3.jpeg";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      dots: true,

      centerPadding: "30px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={images1} alt="" />
          </div>
          <div>
            <img src={images2} alt="" />
          </div>
          <div>
            <img src={images3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
