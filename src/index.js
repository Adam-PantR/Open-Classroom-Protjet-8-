import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Pages/Home/';
import Redirect from './Pages/Redirect/';
import Logements from './Pages/Logements/';
import Propos from './Pages/Propos/';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.StrictMode>  
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/logements/:annoncesId" exact element={<Logements />} />
                <Route path="/propos" exact element={<Propos />} />
                <Route path="*" element={<Redirect />} />
                <Route path="/logements/*" element={<Outlet />}>
                    <Route element={<Redirect />} />
                </Route>
            </Routes>
            <Footer />
        </Router>   
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);