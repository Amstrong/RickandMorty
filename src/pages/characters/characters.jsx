import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import FilterList from "../../components/FilterList/FilterList";
import "../characters/characters.styl";
import Logo from "../../assets/rick-and-morty-logo.png";

function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const nextPage = useSelector((store) => store.characters.nextPage);
  const dispatch = useDispatch();
  if (!characters.length) {
    dispatch(charactersActions.getDataCharacters(nextPage));
  }

  return (
    <div className="container__character">
      <div className="container__logo">
        <img src={Logo} className="logo" />
      </div>
      <div className="container-char">
        <input
          placeholder="Ingresa el nombre de tu personaje..."
          onChange={(e) =>
            dispatch(charactersActions.setSearch(e.target.value))
          }
        />
      </div>
      <div className="filterList__container">
        <div>
          <FilterList />
        </div>
      </div>
      <div>
        <CharactersList list={characters} nextPage = {nextPage} />
      </div>
    </div>
  );
}
export default Characters;
