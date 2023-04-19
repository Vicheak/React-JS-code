import React from "react";
import Siblings from "./Siblings";
import Childs from "./Childs";

class Parents extends React.Component {
  constructor(props) {
    super(props);

    this.state = { darkMode: false };
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "100px" }}>
          <Siblings darkMode={this.state.darkMode}></Siblings>
          <Childs toggleMode={this.toggleMode} />
        </div>
      </React.Fragment>
    );
  }
}

export default Parents;
