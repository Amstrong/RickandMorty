import React from "react";
import "../FilterList/FilterList.styl";
import { selectedFilter } from "../../actions/charactersActions";
import { useSelector, useDispatch } from "react-redux";
function FilterList() {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.characters.filters);

  return (
    <React.Fragment>
      {filters.map((filter) => {
        return <p key={filter} onClick={() => dispatch(selectedFilter(filter))}>{filter}</p>;
      })}
    </React.Fragment>
  );
}
export default FilterList;
