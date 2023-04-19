import React from "react";

class Calculate extends React.Component {
  render() {
    return (
      <>
        <h3>{10 * 2}</h3>
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Calculate;
