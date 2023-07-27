import "../Styles/App.css";
import { Link } from "react-router-dom";
// import Annonces from '../Datas/Annonces.json'

function Card(props) {
  const cards = props.annonces.map((item) => (
    <div key={item.id}>
      <Link
        to={`/Logements/${item.id}`}
        className="imageLocation titleContainer"
      >
        <img src={item.cover} alt={item.title} className="cardBox" />
        <h2 className="titleLocation">{item.title}</h2>
      </Link>
    </div>
  ));
  return <div className="cardContainer parent">{cards}</div>;
}

export default Card;
