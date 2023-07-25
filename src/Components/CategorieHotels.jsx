import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CategorieHotels() {
    const { annoncesId } = useParams()
    const appartement = Annonces.filter(item => item.id === annoncesId);
    const currentAppartement = appartement[0];
    const appartementTags = currentAppartement.tags;
  
    return (
      <div className={'categorieContainer'}>
        {appartementTags.map((tag, index) => (
          <div className='categoryBox' key={index}>
            {tag}
          </div>
        ))}
      </div>
    );
  }

export default CategorieHotels