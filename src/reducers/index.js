import { combineReducers } from "redux";
import characterReducer from "./charactersReducer"
export default combineReducers({
    characters: characterReducer
})