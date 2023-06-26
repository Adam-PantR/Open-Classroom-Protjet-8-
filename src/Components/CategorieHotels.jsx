import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'

function CategorieHotels() {
    const appartement = Annonces.filter(item => item.id === 'b9123946');
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