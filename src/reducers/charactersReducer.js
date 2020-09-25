import {GET_DATA_CHARACTERS} from "../types/characterTypes";
const INITIAL_STATE = {
  charactersData: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_CHARACTERS:
      return { ...state, charactersData: action.payload };
    default:
      return state;
  }
};
