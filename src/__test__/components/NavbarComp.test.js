import React from "react";
import { Link } from "react-router-dom";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

describe("<Navbar/>", () => {
  test("Verifying the ReactRouter Link", () => {
    const component = renderer.create(
      <StaticRouter location="someLocation" context={{}}>
        <Link to="/" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
