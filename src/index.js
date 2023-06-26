import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.css';
import App from './Components/App';
import Home from './Pages/Home/index'
import Logements from './Pages/Logements/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Logements />
  </React.StrictMode>
);


