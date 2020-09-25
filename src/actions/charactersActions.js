import Axios from "axios";
import { GET_DATA_CHARACTERS } from "../types/characterTypes";

export const getDataCharacters = () => async (dispatch) => {
  try {
    const characters = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch({
      type: GET_DATA_CHARACTERS,
      payload: characters,
    });
  } catch (e) {
    console.log(e.message);
  }
};
