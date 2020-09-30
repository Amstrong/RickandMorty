import React, { useEffect, useState } from "react";
import * as charactersActions from "../../actions/charactersActions";
import { connect } from "react-redux";
import CharactersList from "../../components/CharactersList/ListCharacters";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loading from "../../components/Loading/Loading";
import "./characters.styl";
import Navbar from "../../components/Navbar/NavbarComp";

import { useGetData } from "../../components/hooks/useGetData";

const charactersPage = (props) => {
  const characters = useGetData(props.nextPage);
    props.getDataCharacters(characters);

    
  if (props.error.length != "") {
    return <ErrorComp error={error} />;
  }



  return (
    <div className="characters">
      <Navbar />
      {props.loading ? <Loading /> : null}
      <div className="container__character">
        <div className="container-char">
          <input
            placeholder="Ingresa el nombre de tu personaje..."
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </div>
        <div>
          <CharactersList list={characters} />
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
