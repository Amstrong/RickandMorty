import Axios from "axios";
import { GET_DATA_CHARACTERS, SET_SEARCH ,SELECTED_FILTER} from "../types/characterTypes";

export const getDataCharacters = () => async (dispatch) => {
  try {
    const characters = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    dispatch({
      type: GET_DATA_CHARACTERS,
      payload: characters.data.results,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const setSearch = (text) => (dispatch) => {
  dispatch({
    type: SET_SEARCH,
    payload: text,
  });
};

export const selectedFilter = (filter) => (dispatch) =>{
  dispatch({
    type: SELECTED_FILTER,
    payload: filter
  })
}