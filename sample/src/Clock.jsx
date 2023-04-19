import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    //console.log("constructor method working!");
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    //console.log("componentDidMount working!");
  }

  render() {
    //console.log("render method working!");
    return (
      <>
        <div style={{ width: 200, fontSize: "2rem", margin: "10px auto" }}>
          {this.state.date.toLocaleTimeString()}
        </div>
      </>
    );
  }
}

export default Clock;
