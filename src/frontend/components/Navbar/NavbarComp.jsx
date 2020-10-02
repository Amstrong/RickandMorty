import React from "react";
import Logo from "../../assets/rick-and-morty-logo.png";
import "../Navbar/Navbar.styl";
import { Link } from "react-router-dom";
import * as charactersActions from "../../actions/charactersActions";
import { useSelector, useDispatch } from "react-redux";
function NavbarComp() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const selectFilter = (filter) => {
    if (selectedFilter) {
      dispatch(charactersActions.selectedFilter(""));
    } else {
      dispatch(charactersActions.selectedFilter(filter));
    }
  };
  return (
    <div className="container__navbar">
      <div className="container__logo">
        <Link to="/">
          <img src={Logo} alt="LogoRickandMorty" className="logo-navbar" />
        </Link>
      </div>
      <div className="container__filters">
        {filters.map((filter) => {
          return (
            <p
              className="filters"
              key={filter}
              onClick={() => selectFilter(filter)}
            >
              {filter}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default NavbarComp;
