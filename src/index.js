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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Redirected /> */}
    {/* <Propos /> */}
    {/* <Home /> */}
    <Logements />
    <Footer />
  </React.StrictMode>
);



