import React from "react";

class Siblings extends React.Component {
  render() {
    //style for light mode and dark mode

    //dark mode
    const dark = {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      width: 200,
      height: 200,
    };

    //light mode
    const light = {
      backgroundColor: "white",
      color: "black",
      border: "1px solid gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
      width: 200,
      height: 200,
    };

    //destructuring object
    //const { darkMode } = this.props;

    return (
      <>
        <div>
          {this.props.darkMode ? (
            <div style={dark}>Dark Mode</div>
          ) : (
            <div style={light}>Light Mode</div>
          )}
        </div>
      </>
    );
  }
}

export default Siblings;
