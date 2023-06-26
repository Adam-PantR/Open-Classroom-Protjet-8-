import '../../Styles/App.css'
import Annonces from '../../Datas/Annonces.json'

function Description() {

    const appartementCosy = Annonces.filter(item => item.id === 'b9123946');
    const currentAppartement = appartementCosy[0];
    
    return (
        <div>
        
        </div>
    )
    
}

export default Description