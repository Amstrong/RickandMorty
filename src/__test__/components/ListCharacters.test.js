import { loadMoreCharacters } from "../../frontend/components/CharactersList/ListCharacters";
describe("Fetch API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("Call API and return data", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    loadMoreCharacters(1).then((response) => {
      expect(response.data).toEqual("12345");
    });
  });
});
