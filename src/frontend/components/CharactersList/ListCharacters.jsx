import React, { useEffect } from "react";
import "./CharactersList.styl";
import * as charactersActions from "../../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
function ListCharacters() {
  let filteredCharacters = null;
  const characterName = useSelector((state) => state.search);
  const maxPages = useSelector((state) => state.maxPages);
  const nextPage = useSelector((state) => state.nextPage);
  const dispatch = useDispatch();
  const listCharacters = useSelector((state) => state.charactersData);

  useEffect(() => {
    if (listCharacters.length == 0) {
      loadMoreCharacters();
    }
  });

  const loadMoreCharacters = async () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
      .then((response) => response.json())
      .then(
        (data) => (
          dispatch(charactersActions.getDataCharacters(data.results)),
          dispatch(charactersActions.sumNextPage()),
          dispatch(charactersActions.loading(false))
        )
      )
      .catch((err) => dispatch(charactersActions.errorAction(err.message)));
  };

  const filterSelected = useSelector((state) => state.selectedFilter);
  if (filterSelected != "") {
    const filterCategory = listCharacters.filter((character) => {
      return (
        character.species.toLowerCase() == filterSelected.toLowerCase() ||
        character.gender.toLowerCase() == filterSelected.toLowerCase() ||
        character.type.toLowerCase() == filterSelected.toLowerCase() ||
        character.status.toLowerCase() == filterSelected.toLowerCase()
      );
    });
    filteredCharacters = filterCategory.filter((character) => {
      return character.name.toLowerCase().includes(characterName.toLowerCase());
    });
  } else {
    filteredCharacters = listCharacters.filter((character) => {
      return character.name.toLowerCase().includes(characterName.toLowerCase());
    });
  }

  return (
    <div>
      {!listCharacters.length ? null : (
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
                onClick={loadMoreCharacters}
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
export default ListCharacters;
