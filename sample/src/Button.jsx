import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button className="btn btn-warning" onClick={this.props.onClick}>
          Click me
        </button>
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={this.props.handleChangeName}
        >
          Change Name
        </button>
      </>
    );
  }
}

export default Button;
