import Axios from "axios";
import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR,
  MAX_PAGES,LOADING
} from "../types/characterTypes";

export const getDataCharacters = (nextPage) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true
  })
  try {
    const characters = await Axios.get(
      `https://rickandmortyapi.com/api/character?page=${nextPage}`
    );
    console.log(characters.data)
    dispatch({
      type:MAX_PAGES,
      payload: characters.data.info.pages
    })
    dispatch({
      type: GET_DATA_CHARACTERS,
      payload: characters.data.results,
    });
    dispatch({
      type: SUM_NEXT_PAGE,
    });
    dispatch({
      type: LOADING,
      payload: false
    })
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
