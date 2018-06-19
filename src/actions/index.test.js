import React from "react";
import { shallow } from "enzyme";
import { correctGuess, actionTypes } from ".";

correctGuess;

describe("correctGuess", () => {
  it("should return an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
