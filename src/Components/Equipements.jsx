import React, { useState } from 'react';
import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




function Equipements() {
    const { annoncesId } = useParams()
    const appartementCosy = Annonces.filter(item => item.id === annoncesId);
    const currentAppartement = appartementCosy[0];
    const [isVisible, setIsVisible] = useState(false);
      
        function handleClickEquipements() {
          setIsVisible(isVisible => !isVisible)
          console.log(isVisible) 
        }
    return (
            <div className="dropdown" id="dropdownMenu" onClick={handleClickEquipements}>
                <button className="btn">Equipements<div className={`arrow ${isVisible ? "arrow-bottom" : "arrow-top" }`}></div></button>
                <div className={`dropdown-content dropdown-equipements ${isVisible ? "dropdown-content-ON" : "dropdown-content-OFF"}`}>
                {currentAppartement.equipments}
                </div>
            </div>
                )
    
}

export default Equipements