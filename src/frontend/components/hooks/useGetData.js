import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as charactersActions from "../../actions/charactersActions";

export function useGetData(nextPage) {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
    dispatch(charactersActions.sumNextPage());
  }, []);
  dispatch(charactersActions.getDataCharacters(characters));
  return characters;
}
