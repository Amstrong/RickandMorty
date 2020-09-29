import React from "react";
import Spinner from "../../assets/giphy.gif";
import "./Loading.styl";
function Loading() {
  return (
    <div className="container__loading">
      <div className="loading__element">
        <img src={Spinner} alt="spinner" className="spinner" />
      </div>
    </div>
  );
}
export default Loading;
