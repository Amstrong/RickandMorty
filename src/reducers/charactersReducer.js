import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR
} from "../types/characterTypes";
const INITIAL_STATE = {
  charactersData: [],
  search: "",
  filters: ["Human", "Alive", "Dead", "Male", "Female", "Genetic experiment"],
  selectedFilter: "",
  nextPage: 1,
  error: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_CHARACTERS:
      return {
        ...state,
        charactersData: state.charactersData.concat(action.payload),
      };
    case ERROR:
      return { ...state, error: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    case SUM_NEXT_PAGE:
      return { ...state, nextPage: state.nextPage + 1 };

    default:
      return state;
  }
};
