import { useState, useEffect } from "react";

export function useGetData(nextPage) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return characters;




    // return fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
    //   .then((response) => response.json())
    //   .then((data) => data)
    //   .catch(error => console.log(error))
 
  // return characters;
}
