import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe("render Input Component", () => {
  describe("word has not been guessed", () => {
    it("should render without errors", () => {});
    it("should render input box", () => {});
    it("should render submit button", () => {});
  });

  describe("word has been guessed", () => {
    it("should not render without errors", () => {});
    it("should not render input box", () => {});
    it("should not render submit button", () => {});
  });
});

describe("update state", () => {});
