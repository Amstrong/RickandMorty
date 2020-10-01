import reducer from "../../frontend/reducers/index";
import charactersMocks from "../../__mocks__/charactersMocks";
import {
  GET_DATA_CHARACTERS,
  MAX_PAGES,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR,
  LOADING,
} from "../../frontend/types/characterTypes";

describe("Reducers", () => {
  test("Retornar initialState", () => {
    expect(reducer({}, "")).toEqual({});
  });

  test("GET_DATA_CHARACTER", () => {
    const initialState = {
      charactersData: [],
    };
    const payload = charactersMocks;
    const action = {
      type: GET_DATA_CHARACTERS,
      payload,
    };
    const expected = {
      charactersData: [charactersMocks],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("SET_SEARCH", () => {
    const initialState = {
      search: "",
    };
    const payload = "prueba";
    const action = {
      type: SET_SEARCH,
      payload,
    };
    const expected = {
      search: "prueba",
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("ERROR", () => {
    const initialState = {
      error: "",
    };
    const payload = "prueba";
    const action = {
      type: ERROR,
      payload,
    };
    const expected = {
      error: "prueba",
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("SELECTED_FILTER", () => {
    const initialState = {
      selectedFilter: "",
    };
    const payload = "prueba";
    const action = {
      type: SELECTED_FILTER,
      payload,
    };
    const expected = {
      selectedFilter: "prueba",
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("SUM_NEXT_PAGE", () => {
    const initialState = {
      nextPage: 1,
    };

    const action = {
      type: SUM_NEXT_PAGE,
    };
    const expected = {
      nextPage: 2,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("LOADING", () => {
    const initialState = {
      loading: false,
    };

    const action = {
      type: LOADING,
    };
    const expected = {
      loading: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
