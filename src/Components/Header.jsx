import '../Styles/App.css';
import Kasa from '../Images/Kasa.jpg'
import Home from '../Pages/Home/index'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to={`/Home/`}>
                    <img src={Kasa} className="kasa" alt="logo" />
                </Link>
                <div className='Accueil'>
                    <Link to={`/Home/`}>          
                        Accueil
                    </Link>
                    <Link to={`/Propos/`}>
                        A propos
                    </Link>                  
                    
                </div>
            </div>
        </div>
        )
}

export default Header

            