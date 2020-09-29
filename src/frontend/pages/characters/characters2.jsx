import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { connect } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loading from "../../components/Loading/Loading";
import "./characters.styl";
import Navbar from "../../components/Navbar/Navbar";

const characters2 = (props) => {
  if (props.characters.length == []) {
    props.getDataCharacters();
  }
  if (props.error.length != "") {
    return <ErrorComp error={error} />;
  }

  return (
    <div className="characters">
      {props.loading ? <Loading /> : null}
      <div className="container__character">
        <div className="container-char">
          <input
            placeholder="Ingresa el nombre de tu personaje..."
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.charactersData,
    error: state.error,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  ...charactersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(characters2);
