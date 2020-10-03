import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { connect } from "react-redux";
import "./characters.styl";

import CharactersList from "../../components/CharactersList/ListCharacters";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/NavbarComp";

const charactersPage = (props) => {
  if (props.error.length != "") {
    return <ErrorComp />;
  }
  return (
    <div className="characters">
      <Navbar />
      <div className="container__character">
        <div className="container-char">
          <input
            placeholder="Ingresa el nombre de tu personaje..."
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </div>
        <div>
        {props.loading ?  <CharactersList /> : <Loading/> }

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    loading: state.loading,
    nextPage: state.nextPage,
  };
};

const mapDispatchToProps = {
  ...charactersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(charactersPage);
