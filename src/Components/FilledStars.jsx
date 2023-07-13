import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'



function FilledStars() {
  const appartementCosy = Annonces.filter(item => item.id === 'b9123946');
  const currentAppartement = appartementCosy[0];
  const rating = currentAppartement.rating;
  const componentsToRender = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        componentsToRender.push(<div className='filledStar'><FontAwesomeIcon key={"filledStar" + i} icon={faStar} /></div>);
      }
    }
    const unRating = 5-currentAppartement.rating;
    const componentsToRenderEmpty = [];
    if (unRating > 0) {
      for (let i = 0; i < unRating; i++) {
        componentsToRenderEmpty.push(<div className='emptyStars'><FontAwesomeIcon key={"emptyStar" + i} icon={faStar} /></div>);
      }
    }
    
    
    return (
      <div className='starsContainer'>
        {componentsToRender.map((component) => component)}
        {componentsToRenderEmpty.map((component) => component)}
      </div>
    );}

export default FilledStars