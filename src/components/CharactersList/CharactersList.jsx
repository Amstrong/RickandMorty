import React from "react";
import "../CharactersList/CharactersList.styl";
function CharactersList({ list }) {
  return (
    <div>
      {!list.length ? (
        console.log("No hay")
      ) : (
        <div>
          {list.map((character) => {
            return <p key={character.id}>{character.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}
export default CharactersList;
