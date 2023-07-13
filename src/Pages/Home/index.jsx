import '../../Styles/App.css';
import Banner from '../../Components/Banner'
import Card from '../../Components/Card'
import Annonces from '../../Datas/Annonces.json'

function Home() {
    return (
        <div className='homeContainer'>
          <Banner />
          <Card AnnonceId={Annonces}/>
        </div>

    )
  }
  export default Home
  // add styled-components