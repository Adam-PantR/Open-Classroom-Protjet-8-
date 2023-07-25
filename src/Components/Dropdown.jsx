import React, { useState } from 'react';
import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



function Description(props) {
    const { annoncesId } = useParams()
    const appartementCosy = Annonces.filter(item => item.id === annoncesId);
    const currentAppartement = appartementCosy[0];
    const [isVisible, setIsVisible] = useState(false);
      
        function handleClick() {
          setIsVisible(isVisible => !isVisible)
          console.log(isVisible)
        }
    return (
            <div className="dropdown" id="dropdownMenu" onClick={handleClick}>
                <button className="btn">{props.name}<div className={`arrow ${isVisible ? "arrow-bottom" : "arrow-top" }`}></div></button>
                <div className={`dropdown-content ${isVisible ? "dropdown-content-ON" : "dropdown-content-OFF"}`}>
                {currentAppartement.description}
                </div>
            </div>
            )
}

export default Description