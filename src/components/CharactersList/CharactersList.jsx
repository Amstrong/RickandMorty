import React from "react";
import "./CharactersList.styl";
function CharactersList({ list }) {
  return (
    <div>
      {!list.length ? (
        console.log("No hay")
      ) : (
        <div className="container__characterList">
          {list.map((character) => {
            return (
              <div key={character.id} className="container--character">
                <div className="photo">
                  <img src={character.image} alt={character.name} className="photo__character"/>
                </div>
                <div className="character__properties">
                <div> 
                  <p>{character.name}</p>
                  <p>{character.species} - {character.status}</p>
                  <p>{character.gender}</p>
                  <p>{character.location.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default CharactersList;
