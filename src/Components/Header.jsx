import '../Styles/App.css';
import Kasa from '../Images/Kasa.jpg'
import Home from '../Pages/Home/index'

function Header() {
    return (
        <div className='header'>
            <img src={Kasa} className="kasa" alt="logo" />
            <div className='Accueil'>          
                <a href='../Home'>Accueil</a>                  
                <a>A propos</a>
            </div>
        </div>
        )
}

export default Header

            