import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../actions";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="Enter Guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-ptimary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(Input);
