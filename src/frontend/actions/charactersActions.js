import {
  GET_DATA_CHARACTERS,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
  ERROR,
  MAX_PAGES,
  LOADING,
} from "../types/characterTypes";

export const getDataCharacters = (payload) => ({
  type: GET_DATA_CHARACTERS,
  payload,
});

export const maxPages = (payload) => ({
  type: MAX_PAGES,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const selectedFilter = (payload) => ({
  type: SELECTED_FILTER,
  payload,
});

export const sumNextPage = () => ({
  type: SUM_NEXT_PAGE,
});

export const errorAction = (payload) => ({
  type: ERROR,
  payload
})

export const loading = (payload) => ({
  type:LOADING,
  payload
})