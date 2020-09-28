import React from "react";
import Spinner from "../../assets/giphy.gif";
import "../Loading/Loading.styl"
export default function Loading() {
  return (
    <div className="container__loading">
      <div className="loading__element">
        <img src={Spinner} alt="spinner" className="spinner" />
      </div>
    </div>
  );
}
