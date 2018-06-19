import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { succes: false };

const wrapperSetup = (props = {}) => {
  const propsSetup = { ...defaultProps, ...props };
  return shallow(<Congrats {...propsSetup} />);
};

it("should render without errors", () => {
  const wrapper = wrapperSetup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("should render no text when `success` prop is false", () => {
  const wrapper = wrapperSetup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

it("should render non-empty congrats message when succes prop is true", () => {
  const wrapper = wrapperSetup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

it("should not throw warning with expected props", () => {
  const expectedProps = { succes: false };
  checkProps(Congrats, expectedProps);
});
