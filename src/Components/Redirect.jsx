import React from "react";
import "../Styles/App.css";
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <div className="Redirect">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to={`/Home/`}>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Redirect;
