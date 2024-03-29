import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages//Home/'
import Redirect from './Pages/Redirect/'
import Logements from './Pages/Logements/'
import Propos from './Pages//Propos/'
import App from "./Components/App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import App from './Components/App';
import Propos from './Pages/Propos';
import Home from './Pages/Home/index'
import Logements from './Pages/Logements/index';
import Redirected from './Pages/Redirect/index'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/redirect" exact element={<Redirect />} />
                <Route path="/logements" exact element={<Logements />} />
                <Route path="/propos" exact element={<Propos />} />
            </Routes>
        </Router>
    </React.StrictMode>,
     document.getElementById('root')
)

        
            


