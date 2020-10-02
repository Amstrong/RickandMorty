import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as charactersActions from "../../actions/charactersActions";

export function getData(nextPage) {
  const dispatch = useDispatch();
//   const [characters, setCharacters] = useState([]);
//   useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) =>  dispatch(charactersActions.getDataCharacters(data)) );
     
    
    dispatch(charactersActions.sumNextPage());
//   }, []);
//   console.log(characters)
//   return characters;
}
