import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
} from "../types/characterTypes";
const INITIAL_STATE = {
  charactersData: [],
  search: "",
  filters: ["Human", "Alive", "Dead", "Male", "Female", "Genetic experiment"],
  selectedFilter: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_CHARACTERS:
      return { ...state, charactersData: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};
