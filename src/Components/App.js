import logo from '../Images/logo.svg';
import '../Styles/App.css';
import React from 'react'

// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from '../Pages/Home/'
// import Redirect from '../Pages/Redirect/'
// import Logements from '../Pages/Logements/'
// import Propos from '../Pages/Propos/'
 
// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Redirect" element={<Redirect />} />
//                 <Route path="/Logements" element={<Logements />} />
//                 <Route path="/Propos" element={<Propos />} />
//             </Routes>
//             <Home />
//         </Router>
//     </React.StrictMode>,
// document.getElementById('root')
// )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
