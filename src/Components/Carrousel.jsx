import React, { useState, useEffect } from "react";
import Annonces from "../Datas/Annonces.json";
import "../Styles/App.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftArrow from "../Images/left-arrow.png";
import RightArrow from "../Images/right-arrow.png";

const Carousel = () => {
  // const [images, setImages] = useState([]);
  const { annoncesId } = useParams();
  const appartementCosy = Annonces.filter((item) => item.id === annoncesId);
  const currentAppartement = appartementCosy[0];
  const pictures = currentAppartement.pictures;
  console.log(pictures);
  const [carouselIndex, setcarouselIndex] = useState(0);
  function toLeft() {
    console.log("to Left");
    carouselIndex == 0
      ? setcarouselIndex((carouselIndex) => pictures.length - 1)
      : setcarouselIndex((carouselIndex) => carouselIndex - 1);
  }
  function toRight() {
    console.log("to Rigth");
    carouselIndex == pictures.length - 1
      ? setcarouselIndex((carouselIndex) => 0)
      : setcarouselIndex((carouselIndex) => carouselIndex + 1);
  }

  // useEffect(() => {
  //   fetch('../Datas/Annonces.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setImages(data.pictures);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div className="carousel">
      {/* <div><img src={pictures[0]} /></div> */}
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
