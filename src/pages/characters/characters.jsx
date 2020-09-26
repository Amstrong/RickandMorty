import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import "../characters/characters.styl";
import Logo from "../../assets/rick-and-morty-logo.png";

function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const dispatch = useDispatch();
  if (!characters.length) {
    dispatch(charactersActions.getDataCharacters());
  }

  return (
    <div className="container__character">
      <div className="container__logo">
        <img src={Logo} className="logo" />
      </div>
      <div className="container-char">
        <input
          placeholder="Ingresa el nombre de tu personaje"
          onChange={(e) =>
            dispatch(charactersActions.setSearch(e.target.value))
          }
        />
      </div>
      <div>
        <p className="nose">3</p>
      </div>
      <div>
        <CharactersList list={characters} />
      </div>
    </div>
  );
}
export default Characters;
