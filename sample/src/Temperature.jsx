import React from "react";
import "./Temperature.css";

class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperatureValue: 10, temperatureColor: "cold" };
    this.handleIncreaseTemperature = this.handleIncreaseTemperature.bind(this);
    this.handleDecreaseTemperature = this.handleDecreaseTemperature.bind(this);
  }

  handleIncreaseTemperature() {
    if (this.state.temperatureValue >= 30) return;
    const newTemperature = this.state.temperatureValue + 1;
    if (newTemperature >= 15) {
      this.setState({ temperatureColor: "hot" });
    }
    this.setState({ temperatureValue: newTemperature });
  }

  handleDecreaseTemperature() {
    if (this.state.temperatureValue <= 0) return;
    const newTemperature = this.state.temperatureValue - 1;
    if (newTemperature < 15) {
      this.setState({ temperatureColor: "cold" });
    }
    this.setState({ temperatureValue: newTemperature });
  }

  render() {
    //html entity : @, &, %
    //celsius symbol : &deg;
    return (
      <React.Fragment>
        <div className="app-container">
          <div className="app-inner-container">
            <div
              className={`temperature-display-container ${this.state.temperatureColor}`}
            >
              <div className="temperature-display">
                {this.state.temperatureValue}&deg;C
              </div>
            </div>
            <div className="button-container">
              <button onClick={this.handleIncreaseTemperature}>+</button>
              <button onClick={this.handleDecreaseTemperature}>-</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Temperature;
