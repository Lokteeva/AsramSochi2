import React, { Component } from "react";
import Slider from "react-slick";

export default class MySlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return (
      <div className="slider">        
        <Slider {...settings}>
          <div>
            <img className="imgSlider" src="./img/DSC00288.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00318.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00324.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00347.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00349.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00358.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00392.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00404.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00419.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00421.jpg"/>
          </div>
          <div>
            <img className="imgSlider" src="./img/DSC00442.jpg"/>
          </div>      
        </Slider>
      </div>
    );
  }
}