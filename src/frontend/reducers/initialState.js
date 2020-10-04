const initialState = {
  charactersData: [],
  maxPages: 34,
  search: "",
  loading: false,
  error: "",
  filters: ["Human", "Alive", "Dead", "Male", "Female"],
  selectedFilter: "",
  nextPage: 1,
};

export default initialState;
