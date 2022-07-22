import React, { Component } from "react";
import Nopic from "./newsComponents/no_pic";
import Banner from "./newsComponents/banner";
class sideNav extends Component {
  state = {};
  render() {
    return (
      <div className="w-full sm:w-5/12 sm:min-h-full p-3 flex flex-col ">
        <div className="sm:sticky px-4 flex flex-col sm:border-4 sm:top-4">
          <div className="w-full">
            <Banner data={"Topics you might like"} />
          </div>
          <div className="flex flex-col items-center">
            {this.props.value.map((post, index) => {
              return <Nopic key={index} link={post._id} post={post} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default sideNav;
