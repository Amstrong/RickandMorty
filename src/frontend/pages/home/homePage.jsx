import React from "react";
import "./home.styl";
import rickAndMorty from "../../assets/rick-and-morty-log.png";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="container">
      <div className="photo">
        <img className="photo__img" src={rickAndMorty} alt="rickAndMorty" />
      </div>
      <div className="container__elements">
        <p className="text--title">Rick&Morty</p>
        <p className="text--subtitle">¡Conoce todos los personajes!</p>
        <Link to="/characters">
          <button className="btn--start">Comienza</button>
        </Link>
      </div>
    </div>
  );
}
export default home;
