import React from "react";
import Slider from "react-slick";

var partnersLogo = Array.from({ length: 12}, (_, index) => require(`./assets/p${index + 1}.png`));

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {partnersLogo.map((logo, index) => (
        <div>
         <img src={logo} alt={`Partner logo ${index + 1}`} style={{ width: '260px' }} />
       
        </div>
         ))}
      </Slider>
    </div>
  );
}

export default Carousel;
