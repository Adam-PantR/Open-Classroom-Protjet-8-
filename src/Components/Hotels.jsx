import '../Styles/App.css'
import CategorieHotels from './CategorieHotels'
import FilledStars from './FilledStars'
import EmptyStars from './EmptyStars'
import Annonces from '../Datas/Annonces.json'
import Carrousel from './Carrousel'
import Description from './Description'
import Equipements from './Equipements'

function Hotels() {

    // const filteredItem = Annonces.list.filter(item => item.id === 'c67ab8a7');
    const appartementCosy = Annonces.filter(item => item.id === 'bc6f7112');
    const currentAppartement = appartementCosy[0];
    
    return (
        <div className='hotelContainer'>
            {/* <Carrousel /> */}
                        <img src={currentAppartement.cover} className='hotelImage' alt="Image de l'hôtel" />
            <div className='titleAutor'>
                        <h1>{currentAppartement.title}</h1>
                <div className='titleAutor title-autor-position'>
                        <p>{currentAppartement.host.name}</p>
                    <div className='greyCercle'><img src={currentAppartement.host.picture} alt='photo de profile' className='profile-cercle'/></div>
                </div>
            </div>
                <p>{currentAppartement.location}</p>
            <div className='categorieStarsContainer'>
                <div className='categorieContainer'>
                    <CategorieHotels />
                </div>
                <div className='starsContainer'>
                    <FilledStars />
                    <EmptyStars />
                    <EmptyStars />
                </div>
            </div>
            <div>
                <Description />
                
            </div>
            <div>
                <Equipements />
            </div>
            
            
            
            
        </div>
    )
}

export default Hotels