import React, { useState, useEffect } from 'react';
import Annonces from '../Datas/Annonces.json'
import '../Styles/App.css'

const Carousel = () => {
  // const [images, setImages] = useState([]);
  const appartementCosy = Annonces.filter(item => item.id === 'b9123946');
  const currentAppartement = appartementCosy[0];
  const pictures = currentAppartement.pictures;

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
      {pictures.map(image => (
        <div key={image.id} className="carousel__item">
          <img src={image.pictures} alt={image.caption} />
          <p className="carousel__caption">{image.caption}</p>
        </div>
      ))}
    </div>
  )
};

export default Carousel;