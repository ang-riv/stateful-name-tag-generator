import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import { UserInput } from "./UserInput.js";
class App extends Component {
  state = {
    names: [],
  };
  addName = (newName) => {
    // add a new name to the names array in state
    const newNameArr = [newName, ...this.state.names];
    // setting the old array to the new one
    this.setState({ names: newNameArr });
  };
  // allows us to remove names! removes it using the index
  removeName = (clickedIndex) => {
    // not using first parameter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {/*this.addName is a prop */}
        <UserInput names={this.state.names} addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
