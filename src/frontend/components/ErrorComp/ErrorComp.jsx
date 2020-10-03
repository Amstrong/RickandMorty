import React from "react";
import ErrorMorty from "../../assets/rick-and-morty-error.png";
import "../ErrorComp/ErrorComp.styl";
function ErrorComp() {
  return (
    <div className="container__error">
      <div className="error__elements">
        <img src={ErrorMorty} alt="Error-morty" className="morty--error" />
        <p className="page__dontExist">Error</p>
        <p className="page__complement">
          Disculpa los inconvenientes, intentalo más tarde.
        </p>
      </div>
    </div>
  );
}
export default ErrorComp;
