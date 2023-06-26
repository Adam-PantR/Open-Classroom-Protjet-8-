import '../../Styles/App.css';
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer'

function Home() {
    return (
      <div>
        <div className='homeContainer'>
          <Header />
          <Banner />
          <div className='cardContainer'>
            <div className='flexRow'>
              <Card />
              <Card />
              <Card />
            </div>
            <div className='flexRow'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  export default Home
  // add styled-components