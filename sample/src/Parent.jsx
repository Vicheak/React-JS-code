import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Jackson" };
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName() {
    if (this.state.name === "Jackson") this.setState({ name: "Dara" });
    else this.setState({ name: "Jackson" });
  }

  render() {
    return (
      <>
        <h5>Child component changes its parent's state</h5>
        <Child
          name={this.state.name}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}

export default Parent;
