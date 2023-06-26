import '../../Styles/App.css'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Hotels from '../../Components/Hotels'


function Logements() {
    return (
      <div>
        <div className="logementsContainer">
          <Header />
          <Hotels />
        </div>
        <Footer />
      </div>
    )
  }
  export default Logements
  