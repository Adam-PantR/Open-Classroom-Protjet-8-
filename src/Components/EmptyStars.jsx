import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'



function FilledStars() {
  const appartementCosy = Annonces.filter(item => item.id === 'b9123946');
  const currentAppartement = appartementCosy[0];
  const unRating = 5-currentAppartement.rating;
 console.log(unRating)
  const componentsToRenderEmpty = [];
    if (unRating > 0) {
      for (let i = 0; i < unRating; i++) {
        componentsToRenderEmpty.push(<div className='emptyStars'><FontAwesomeIcon key={"emptyStar" + i} icon={faStar} /></div>);
      }
    }
    
    return (
      <div className='emptyStarsContainer'>
        {componentsToRenderEmpty.map((component) => component)}
      </div>
    );}

export default FilledStars