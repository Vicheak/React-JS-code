import React from "react";

class Childs extends React.Component {
  render() {
    //const { toggleMode } = this.props;

    return (
      <>
        <div className="mt-4">
          <button className="btn btn-danger" onClick={this.props.toggleMode}>
            Switch Mode
          </button>
        </div>
      </>
    );
  }
}

export default Childs;
