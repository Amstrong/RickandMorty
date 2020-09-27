import Axios from "axios";
import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR,
} from "../types/characterTypes";

export const getDataCharacters = (nextPage) => async (dispatch) => {
  try {
    const characters = await Axios.get(
      `https://rickandmortyapi.com/api/character?page=${nextPage}`
    );

    dispatch({
      type: GET_DATA_CHARACTERS,
      payload: characters.data.results,
    });
    dispatch({
      type: SUM_NEXT_PAGE,
    });
  } catch (e) {
    dispatch({
      type:ERROR,
      payload: "Por favor, intentalo más tarde."
    })
  }
};

export const setSearch = (text) => (dispatch) => {
  dispatch({
    type: SET_SEARCH,
    payload: text,
  });
};

export const selectedFilter = (filter) => (dispatch,getState) => {
  const {selectedFilter} = getState().characters
  if (selectedFilter.toLowerCase() == filter.toLowerCase()) {
    dispatch({
      type: SELECTED_FILTER,
      payload: "",
    });
    
  }else{
    dispatch({
      type: SELECTED_FILTER,
      payload: filter,
    });
  }
  
};
