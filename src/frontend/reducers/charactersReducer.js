import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR,MAX_PAGES,
  LOADING
} from "../types/characterTypes";
const INITIAL_STATE = {
  charactersData: [],
  maxPages: null,
  search: "",
  loading:false,
  error: "",
  filters: ["Human", "Alive", "Dead", "Male", "Female", "Genetic experiment"],
  selectedFilter: "",
  nextPage: 1,
  
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_CHARACTERS:
      return {
        ...state,
        charactersData: state.charactersData.concat(action.payload),
        loading: false
      };
    case ERROR:
      return { ...state, error: action.payload };
    case MAX_PAGES:
      return{...state, maxPages: action.payload};
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    case SUM_NEXT_PAGE:
      return { ...state, nextPage: state.nextPage + 1 };
    case LOADING:
      return{...state, loading: true}

    default:
      return state;
  }
};
