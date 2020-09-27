import React from "react";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../../components/CharactersList/CharactersList";
import "../characters/characters.styl";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../assets/rick-and-morty-logo.png";

function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const nextPage = useSelector((store) => store.characters.nextPage);
  const dispatch = useDispatch();
  if (!characters.length) {
    dispatch(charactersActions.getDataCharacters(nextPage));
  }

  return (
    <React.Fragment>
    <Navbar/>
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
    </React.Fragment>
  
    
    );
}
export default Characters;
