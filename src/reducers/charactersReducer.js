import { GET_DATA_CHARACTERS, SET_SEARCH } from "../types/characterTypes";
const INITIAL_STATE = {
  charactersData: [],
  search: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_CHARACTERS:
      return { ...state, charactersData: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
