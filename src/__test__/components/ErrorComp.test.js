import React from "react";
import { mount } from "enzyme";
import Error from "../../frontend/components/ErrorComp/ErrorComp";

describe("<Error/>", () => {
  test("Error: Checking the UI", () => {
    const error = mount(<Error />);
    expect(error.find(".page__complement").text()).toEqual(
      "Disculpa los inconvenientes, intentalo más tarde."
    );
  });
});
