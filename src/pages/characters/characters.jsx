import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loading from "../../components/Loading/Loading";
import "../characters/characters.styl";
import Navbar from "../../components/Navbar/Navbar";

function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const error = useSelector((store) => store.characters.error);
  const loading = useSelector((store) => store.characters.loading);
  const dispatch = useDispatch();

  if (characters.length == []) {
    console.log(
      "El tamaño de characters es",
      characters.length,
      "y el de con el signo es",
      !characters.length
    );
    dispatch(charactersActions.getDataCharacters());
  }
  if (error.length != "") {
    return <ErrorComp error={error} />;
  }

  return (
    <div className="characters">
      <Navbar />
      {loading ? <Loading /> : null}
      <div className="container__character">
        <div className="container-char">
          <input
            placeholder="Ingresa el nombre de tu personaje..."
            onChange={(e) =>
              dispatch(charactersActions.setSearch(e.target.value))
            }
          />
        </div>
        <div>
          <CharactersList list={characters}/>
        </div>
      </div>
    </div>
  );
}
export default Characters;
