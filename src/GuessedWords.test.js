import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const wrapperSetup = (props = {}) => {
  const propsSetup = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...propsSetup} />);
};

it("should not throw a warning with expected props ", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("When no words are guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = wrapperSetup({ guessedWords: [] });
  });
  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  it("should render instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("When words are guessed", () => {});