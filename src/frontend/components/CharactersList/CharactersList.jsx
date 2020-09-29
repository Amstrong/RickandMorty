import React from "react";
import "./CharactersList.styl";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";


function CharactersList({ list}) {
  let filteredCharacters = null;
  const characterName = useSelector((state) => state.search);
  const maxPages = useSelector((state) => state.maxPages);
  const nextPage = useSelector((state) => state.nextPage);
  const dispatch = useDispatch();
  const filterSelected = useSelector(
    (state) => state.selectedFilter
  );
  if (filterSelected != "") {
    const filterNose = list.filter((character) => {
      return (
        character.species.toLowerCase() == filterSelected.toLowerCase() ||
        character.gender.toLowerCase() == filterSelected.toLowerCase() ||
        character.type.toLowerCase() == filterSelected.toLowerCase() ||
        character.status.toLowerCase() == filterSelected.toLowerCase()
      );
    });
    filteredCharacters = filterNose.filter((character) => {
      return character.name.toLowerCase().includes(characterName.toLowerCase());
    });
  } else {
    filteredCharacters = list.filter((character) => {
      return character.name.toLowerCase().includes(characterName.toLowerCase());
    });
  }

  return (
    <div>
      {!list.length ? null : (
        <React.Fragment>
          <div className="container__characterList">
            {filteredCharacters.map((character) => {
              return (
                <div key={character.id} className="container--character">
                  <div className="photo">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="photo__character"
                    />
                  </div>
                  <div className="character__properties">
                    <div>
                      <p className="character__name">{character.name}</p>
                      <p>
                        {character.species} - {character.status}
                      </p>
                      <p>{character.gender}</p>
                      <p>{character.location.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn--container">
            {maxPages > nextPage ? (
              <button
                className="btn--moreCharacters"
                onClick={() =>
                  dispatch(charactersActions.getDataCharacters())
                }
              >
                Cargar más
              </button>
            ) : null}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
export default CharactersList;
