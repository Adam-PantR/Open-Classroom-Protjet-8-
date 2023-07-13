import '../Styles/App.css'
import Annonces from '../Datas/Annonces.json'

function Card(props) {
    const cards = Annonces.map((item) => (
        <div key={item.id}  >
            <a href='#' className='imageLocation titleContainer' >
                <img src={item.cover} alt={item.title}  className="cardBox"/>
                <h2 className='titleLocation'>{item.title}</h2>
            </a>
          
        </div>
      ));
    return (
        <div className='cardContainer parent'>
            {cards}
        </div>
        
    )
}

export default Card