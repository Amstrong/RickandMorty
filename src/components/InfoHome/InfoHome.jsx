import React from "react";
import "../InfoHome/InfoHome.styl";
import { Link } from "react-router-dom";
import rickAndMorty from "../../assets/rick-and-morty-log.png";
export default function InfoHome({ children }) {
  return (
    <div className="container">
      <div className="photo">
        <img className="photo__img" src={rickAndMorty} alt="rickAndMorty" />
      </div>
      <div className="container__elements">
        {children}
        <Link to="/characters">
          <button className="btn--start">Comienza</button>
        </Link>
      </div>
    </div>
  );
}
