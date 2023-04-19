import React from "react";
import Calculate from "./Calculate";
import Navbar from "./Navbar";
import Button from "./Button";

//stateful components
class DisplayResult extends React.Component {
  //constructor with parameter
  constructor(props) {
    super(props);

    //creating the initial state (current object)
    this.state = { name: "Vicheak", age: 19, isAllowed: true };

    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleClick() {
    alert("I am from click event!");
  }

  handleChangeName() {
    if (this.state.name === "Vicheak") {
      this.setState({ name: "Dara" });
    } else if (this.state.name === "Dara") {
      this.setState({ name: "Vicheak" });
    }
  }

  render() {
    const pages = ["home", "products", "about-us", "contact"];

    return (
      <>
        <Navbar pages={pages} />
        <Calculate>
          This is everything between the opening tag and closing tag of a
          Component
        </Calculate>
        <Button
          onClick={this.handleClick}
          handleChangeName={this.handleChangeName}
        />
        <h4>
          Accessing the state value : My name is {this.state.name}, and i am{" "}
          {this.state.age} years old!
        </h4>
      </>
    );
  }
}

export default DisplayResult;
