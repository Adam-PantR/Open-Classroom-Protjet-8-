import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/App.css'

function EmptyStars() {
    return (
      <div className='emptyStars'>
        <FontAwesomeIcon icon={faStar} />
      </div>
    );}

export default EmptyStars