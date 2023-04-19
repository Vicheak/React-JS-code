import React from "react";

class DisplayGreeting extends React.Component {
  //function member
  render() {
    //random number from 1 to 100
    const random = Math.floor(Math.random() * 100 + 1);

    return (
      <React.Fragment>
        <h3>Hello, React JS with Random number {random}</h3>
        <img src="https://picsum.photos/200/300/?blur" alt="demo_img" />
      </React.Fragment>
    );
  }
}

export default DisplayGreeting;
