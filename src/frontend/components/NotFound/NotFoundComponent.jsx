import React from "react";
import "../../components/NotFound/NotFound.styl";
import { Link } from "react-router-dom";
import Morty from "../../assets/morty_404.png";
export default function NotFoundComponent(){
  return (
    <div className="container__notFound">
      <div className="notFound__elements">
        <img src={Morty} alt="Morty" className="morty--photo" />
        <p className="page__dontExist">No encontramos lo que buscabas.</p>
        <Link to="/">
          <button className="btn--start">Regresa al inicio</button>
        </Link>
      </div>
    </div>
  );
};

