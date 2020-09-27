import React from "react";
import Logo from "../../assets/rick-and-morty-logo.png";
import "../Navbar/Navbar.styl";
import { selectedFilter } from "../../actions/charactersActions";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.characters.filters);
  return (
    <div className="container__navbar">
      <div className="container__logo">
        <img src={Logo} alt="LogoRickandMorty" className="logo-navbar" />
      </div>
      <div className="container__filters">
        {filters.map((filter) => {
          return (
            <p
              className="filters"
              key={filter}
              onClick={() => dispatch(selectedFilter(filter))}
            >
              {filter}
            </p>
          );
        })}
      </div>
    </div>
  );
}
