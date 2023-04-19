import React from "react";

class Child extends React.Component {
  render() {
    //destructuring method
    const { name: fullName, handleChangeName } = this.props;

    return (
      <>
        <h5>State data : {fullName}</h5>
        <button className="btn btn-success" onClick={handleChangeName}>
          Change Name
        </button>
      </>
    );
  }
}

export default Child;
