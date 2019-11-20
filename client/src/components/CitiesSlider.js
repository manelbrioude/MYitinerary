import React from "react";
import Slider from "react-slick";
import barcelona from "../assets/barcelona.jpg";
import berlin from "../assets/berlin.jpg";
import london from "../assets/london.jpg";
import newyork from "../assets/newyork.jpg";
import prague from "../assets/prague.jpg";
import rome from "../assets/rome.jpg";
import madrid from "../assets/madrid.png";
import lisbon from "../assets/lisbon.jpg";
import dublin from "../assets/dublin.jpg";
import budapest from "../assets/budapest.jpg";
import amsterdam from "../assets/amsterdam.jpg";
import paris from "../assets/paris.jpeg";

class CitiesSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div className="oneSlide">
          <div className="topImages">
            <img src={barcelona} alt="barcelona" />
            <img src={berlin} alt="berlin" />
          </div>
          <div className="botImages">
            <img src={newyork} alt="newyork" />
            <img src={london} alt="london" />
          </div>
        </div>
        <div className="oneSlide">
          <div className="topImages">
            <img src={paris} alt="barcelona" />
            <img src={dublin} alt="berlin" />
          </div>
          <div className="botImages">
            <img src={rome} alt="newyork" />
            <img src={budapest} alt="london" />
          </div>
        </div>
        <div className="oneSlide">
          <div className="topImages">
            <img src={amsterdam} alt="barcelona" />
            <img src={lisbon} alt="berlin" />
          </div>
          <div className="botImages">
            <img src={madrid} alt="newyork" />
            <img src={prague} alt="london" />
          </div>
        </div>
      </Slider>
    );
  }
}
export default CitiesSlider;
