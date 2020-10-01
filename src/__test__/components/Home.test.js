import React from "react";
import { mount } from "enzyme";
import { Link } from "react-router-dom";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";
import Home from "../../frontend/pages/home/homePage";
import ProviderMock from "../../__mocks__/ProviderMock";

describe("Test del Home", () => {
  test("Home: Comprobando la UI", () => {
    const home = mount(
      <ProviderMock>
        <Home />
      </ProviderMock>
    );
    expect(home.find(".text--title").text()).toEqual("Rick&Morty");
  });

  test("Home: Comprobando Link de ReactRouter", () => {
    const component = renderer.create(
      <StaticRouter location="someLocation" context={{}}>
        <Link to="/characters" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
