import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/App.css'

function FilledStars() {
    return (
      <div className='filledStar'>
        <FontAwesomeIcon icon={faStar} />
      </div>
    );}

export default FilledStars