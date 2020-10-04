import * as actions from "../../frontend/actions/charactersActions";
import charactersMocks from "../../__mocks__/charactersMocks";
import {
  GET_DATA_CHARACTERS,
  MAX_PAGES,
  SET_SEARCH,
  SELECTED_FILTER,
  SUM_NEXT_PAGE,
} from "../../frontend/types/characterTypes";

describe("<Actions/>", () => {
  test("getDataCharacters Action", () => {
    const payload = charactersMocks;
    const expected = {
      type: GET_DATA_CHARACTERS,
      payload,
    };
    expect(actions.getDataCharacters(payload)).toEqual(expected);
  });

  test("maxPages Action", () => {
    const payload = 54;
    const expected = {
      type: MAX_PAGES,
      payload,
    };
    expect(actions.maxPages(payload)).toEqual(expected);
  });

  test("setSearch Action", () => {
    const payload = "Word";
    const expected = {
      type: SET_SEARCH,
      payload,
    };
    expect(actions.setSearch(payload)).toEqual(expected);
  });

  test("selectedFilter Action", () => {
    const payload = "Filter";
    const expected = {
      type: SELECTED_FILTER,
      payload,
    };
    expect(actions.selectedFilter(payload)).toEqual(expected);
  });

  test("sumNextPage Action", () => {
    const payload = 1;
    const expected = {
      type: SUM_NEXT_PAGE,
    };
    expect(actions.sumNextPage(payload)).toEqual(expected);
  });
});
