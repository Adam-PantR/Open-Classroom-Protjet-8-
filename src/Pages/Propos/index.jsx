import React from 'react';
import "../../Styles/App.css";
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

function Propos() {
    return (
      <div>
          <Header />
            <img className='banner-a-propos' src="../../Images/banner-a-propos.jpg" alt="banner of mountain" />
            <div className='a-propos-container'>
            <div className='a-propos-div'>Fiabilité<div className='arrow'></div></div>
            <div className='a-propos-div'>Respect<div className='arrow'></div></div>
            <div className='a-propos-div'>Service<div className='arrow'></div></div>
            <div className='a-propos-div'>Sécurité<div className='arrow'></div></div>
          </div>
          <Footer />

      </div>
      
         
    )
  }
  export default Propos
  