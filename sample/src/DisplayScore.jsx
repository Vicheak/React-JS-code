import React from "react";

class DisplayScore extends React.Component {
  get name() {
    return "Ah mey";
  }

  getName() {
    return "Dara";
  }

  handleAlert(message) {
    alert(message.props.children);
  }

  render() {
    const score = Math.floor(Math.random() * 100 + 1);
    let message = "";

    if (score < 50 && score >= 0) message = <h4>You failed the exam!</h4>;
    else if (score >= 50 && score <= 100)
      message = <h4>You passed the exam, Congrate!</h4>;

    return (
      <>
        <div>
          <h4>Your name is {this.getName()}</h4>
          <h3>Your score is {score}</h3>
          {message}
          <button
            className="btn btn-danger"
            onClick={() => this.handleAlert(message)}
          >
            Need Help? Click Here
          </button>
        </div>
      </>
    );
  }
}

export default DisplayScore;
