import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../testUtils/testUtils";
import Input from "./Input";
import { guessWord } from "../actions";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe("render Input Component", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("should render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    it("should render submit button", () => {
      const submit = findByTestAttr(wrapper, "submit-button");
      expect(submit.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    it("should not render without errors", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("should not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    it("should not render submit button", () => {
      const submit = findByTestAttr(wrapper, "submit-button");
      expect(submit.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  it("should have succes piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  it("should confirm that the `guessWord` action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
