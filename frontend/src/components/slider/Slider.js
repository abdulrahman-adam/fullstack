import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/slider/1.jpeg" className="d-block w-100" alt="image"/>
      </div>
      <div className="carousel-item">
        <img src="/assets/slider/2.jpeg" className="d-block w-100" alt="image"/>
      </div>
      <div className="carousel-item">
        <img src="/assets/slider/3.jpeg" className="d-block w-100" alt="image"/>
      </div>
      <div className="carousel-item">
        <img src="/assets/slider/2.jpeg" className="d-block w-100" alt="image"/>
      </div>
    </div>
    <span
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Previous</span> */}
    </span>
    <span
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Next</span> */}
    </span>
  </div>
  );
}

export default Slider;