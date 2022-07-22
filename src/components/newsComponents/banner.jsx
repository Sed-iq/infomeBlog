import React, { Component } from "react";
class banner extends Component {
  widthParser = ({ width }) => {
    if (width == undefined)
      return "banner rounded-sm lg:text-xl sm:m-6 p-2 text-white font-bold bg-blue-600";
    else {
      return `banner rounded-sm lg:text-xl sm:m-6 p-2 text-white font-bold bg-blue-600 ${width}`;
    }
  };
  render() {
    return (
      <div className={this.widthParser(this.props)}>{this.props.data}</div>
    );
  }
}

export default banner;
