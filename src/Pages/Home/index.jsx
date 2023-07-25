import '../../Styles/App.css';
import Banner from '../../Components/Banner'
import Card from '../../Components/Card'
import Annonces from '../../Datas/Annonces.json'
import BannerJPG from '../../Images/banner.jpg'

function Home() {
    return (
        <div className='homeContainer'>
          <Banner src={BannerJPG} title="Chez vous, partout et ailleurs" />
          <Card annonces={Annonces}/>
        </div>

    )
  }
  export default Home