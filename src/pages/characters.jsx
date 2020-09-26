import React from "react";
import * as charactersActions from "../actions/charactersActions";
import { useDispatch, useSelector } from "react-redux";
function Characters() {
  const characters = useSelector((store) => store.characters.charactersData);
  const dispatch = useDispatch();
  if (!characters.length) {
    dispatch(charactersActions.getDataCharacters());
  }
  return (
    <div>
      <h1>Characters</h1>
    {console.log("holi")}
    </div>
  );
}
export default Characters;
