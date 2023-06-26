 import '../Styles/App.css'
 import KasaFooter from '../Images/KasaFooter.jpg'

 function Footer() {
    return (
        <div className='footerContainer'>
            <img src={KasaFooter} className="kasaFooter" alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
 }

 export default Footer