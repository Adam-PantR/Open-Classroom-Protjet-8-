import React from "react";
import "../../Styles/App.css";
import Description from "../../Components/Description";
import BannerAPropos from "../../Images/banner-a-propos.jpg";
import Banner from "../../Components/Banner";

function Propos() {
  return (
    <div className="a-propos-container">
      <Banner src={BannerAPropos} />
      <div className="a-propos-container">
        <Description
          name="Fiabilité"
          dropdown="Les annonces postées sur Kasa garantissent une fiabilité totale. Les phtotos sont conformes aux logements, et toutes les informations sont régulièrement vérifiés par nos équipes "
        />
        <Description
          name="Respect"
          dropdown="La bienveillance fait partie des caleurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Description
          name="Services"
          dropdown="La bienveillance fait partie des caleurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Description
          name="Securité"
          dropdown="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifietr que les standards sont bien repectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
export default Propos;
