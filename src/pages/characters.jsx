import React from "react";
import * as charactersActions from "../actions/charactersActions";
import { connect } from "react-redux";
function Characters() {
  return <h1>Characters</h1>;
}

const mapStateToProps = ({ charactersReducer }) => {
  return {
    charactersReducer,
  };
};

const mapDispatchToProps = {
  ...charactersActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Characters);
