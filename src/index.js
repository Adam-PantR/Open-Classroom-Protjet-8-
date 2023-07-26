import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages//Home/'
import Redirect from './Pages/Redirect/'
import Logements from './Pages/Logements/'
import Propos from './Pages//Propos/'
import App from "./Components/App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

ReactDOM.render(
    <React.StrictMode>  
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/logements/:annoncesId" exact element={<Logements />} />
                <Route path="/propos" exact element={<Propos />} />
                <Route path="*" element={<Redirect />} />
            </Routes>
            <Footer />
        </Router>   
    </React.StrictMode>,
     document.getElementById('root')
)

        
            


