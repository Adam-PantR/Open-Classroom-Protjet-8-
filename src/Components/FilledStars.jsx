import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/App.css";
import Annonces from "../Datas/Annonces.json";
import { useParams } from "react-router-dom";

function FilledStars() {
  const { annoncesId } = useParams();
  const appartementCosy = Annonces.filter((item) => item.id === annoncesId);
  const currentAppartement = appartementCosy[0];
  const rating = currentAppartement.rating;
  const componentsToRender = [];
  if (rating > 0) {
    for (let i = 0; i < rating; i++) {
      componentsToRender.push(
        <div className="filledStar" key={"filledStar" + rating + i}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
  }
  const unRating = 5 - currentAppartement.rating;
  const componentsToRenderEmpty = [];
  if (unRating > 0) {
    for (let i = 0; i < unRating; i++) {
      componentsToRenderEmpty.push(
        <div className="emptyStars" key={"emptyStar" + rating + i}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
  }

  return (
    <div className="starsContainer">
      {componentsToRender.map((component) => component)}
      {componentsToRenderEmpty.map((component) => component)}
    </div>
  );
}

export default FilledStars;
