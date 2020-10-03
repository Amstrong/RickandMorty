import React from "react";
import { mount } from "enzyme";
import { Link } from "react-router-dom";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

describe("<Characters/>", () => {
  test("Characters: Comprobando Link de ReactRouter", () => {
    const component = renderer.create(
      <StaticRouter location="someLocation" context={{}}>
        <Link to="/" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
