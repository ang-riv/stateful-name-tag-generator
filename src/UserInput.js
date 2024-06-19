import React from "react";
import { Component } from "react";
// make a stateful Component
export class UserInput extends Component {
  // initialize the state, make name an empty string
  state = {
    name: "",
  };
  // event handler: when ever the input box is changed,
  // update the state along with it
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  // event listener
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.name);
    // resetting the text input to empty as well as name
    this.setState({ name: "" });
  };
  // what we want the UI to look like
  render() {
    return (
      // textbox
      <form onSubmit={this.handleSubmit}>
        {console.log(this.props)}
        {console.log(this.state)}
        <input
          type="text"
          placeholder="Add a new name here..."
          // us telling react that the value in the input box
          // is what state currently is
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}
