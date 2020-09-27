import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import "../characters/characters.styl";
import Navbar from "../../components/Navbar/Navbar";

function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const nextPage = useSelector((store) => store.characters.nextPage);
  const error = useSelector((store) => store.characters.error);
  const dispatch = useDispatch();
  if (!characters.length) {
    dispatch(charactersActions.getDataCharacters(nextPage));
  }
  if (error.length != "") {
    return <ErrorComp error={error} />;
  }

  return (
    <div className="characters">
      <Navbar />
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
          <CharactersList list={characters} nextPage={nextPage} />
        </div>
      </div>
    </div>
  );
}
export default Characters;
