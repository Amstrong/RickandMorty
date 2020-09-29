const initialState = {
  charactersData: [],
  maxPages: null,
  search: "",
  loading: false,
  error: "",
  filters: ["Human", "Alive", "Dead", "Male", "Female", "Genetic experiment"],
  selectedFilter: "",
  nextPage: 1,
};

export default initialState;
