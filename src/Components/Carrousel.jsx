import React, { useState } from "react";
import "../Styles/App.css";
import LeftArrow from "../Images/left-arrow.png";
import RightArrow from "../Images/right-arrow.png";

const Carousel = (props) => {
  const pictures = props.pictures;
  const [carouselIndex, setcarouselIndex] = useState(0);
  function toLeft() {
    carouselIndex == 0
      ? setcarouselIndex((carouselIndex) => pictures.length - 1)
      : setcarouselIndex((carouselIndex) => carouselIndex - 1);
  }
  function toRight() {
    carouselIndex == pictures.length - 1
      ? setcarouselIndex((carouselIndex) => 0)
      : setcarouselIndex((carouselIndex) => carouselIndex + 1);
  }
  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={pictures[carouselIndex]}
          className="carousel-image"
          alt="Image de l'hôtel"
        />
        <img className="left-arrow" src={LeftArrow} onClick={toLeft} />
        <img className="right-arrow" src={RightArrow} onClick={toRight} />
        <span className="carousel-span">
          {carouselIndex + 1}/{pictures.length}
        </span>
      </div>
      {pictures.forEach((image) => (
        <div key={image.id} className="carousel__item">
          <img src={image.pictures} alt={image.caption} />
          <p className="carousel__caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
