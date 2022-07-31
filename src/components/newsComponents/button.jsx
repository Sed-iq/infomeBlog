import React, { Component } from "react";
class button extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={this.props.handler}
          className="p-3 rounded text-white font-bold bg m-2 bg-blue-600"
        >
          Click me
        </button>
      </div>
    );
  }
}

export default button;
