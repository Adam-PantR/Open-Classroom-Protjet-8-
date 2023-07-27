import "../../Styles/App.css";
import CategorieHotels from "../../Components/CategorieHotels";
import FilledStars from "../../Components/FilledStars";
import Annonces from "../../Datas/Annonces.json";
import Carrousel from "../../Components/Carrousel";
import Description from "../../Components/Description";
import { useParams, useNavigate } from "react-router-dom";
import Redirect from "../../Components/Redirect";

function Logements() {
  const { annoncesId } = useParams();
  const appartementCosy = Annonces.filter((item) => item.id === annoncesId);
  const currentAppartement = appartementCosy[0];

  const navigate = useNavigate();
  const isValidAnnoncesId = appartementCosy;
  if (!isValidAnnoncesId) {
    navigate(<Redirect />);
    return null;
  }

  return (
    <div className="logementsContainer">
      <div className="hotelContainer">
        <Carrousel />
        <div className="titleAutor">
          <h1>{currentAppartement.title}</h1>
          <div className="titleAutor title-autor-position">
            <p>{currentAppartement.host.name}</p>
            <div className="greyCercle">
              <img
                src={currentAppartement.host.picture}
                alt="photo de profile"
                className="profile-cercle"
              />
            </div>
          </div>
        </div>
        <p className="location">{currentAppartement.location}</p>
        <div className="categorieStarsContainer">
          <div className="categorieContainer">
            <CategorieHotels />
          </div>
          <div className="starsContainer">
            <FilledStars />
          </div>
        </div>
        <div className="tablette-position">
          <div className="starsContainer-tablette">
            <FilledStars />
          </div>
          <div className="titleAutor-tablette title-autor-position">
            <p>{currentAppartement.host.name}</p>
            <div className="greyCercle">
              <img
                src={currentAppartement.host.picture}
                alt="photo de profile"
                className="profile-cercle"
              />
            </div>
          </div>
        </div>
        <div className="description-equipements-container">
          <Description
            name="Description"
            dropdown={currentAppartement.description}
          />
          <Description
            name="Equipements"
            dropdown={currentAppartement.equipments}
          />
        </div>
      </div>
    </div>
  );
}
export default Logements;
