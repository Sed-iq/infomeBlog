import React, { Component } from "react";
import opt from "./../../public/opt.png";
class navBar extends Component {
  render() {
    return (
      <div style={{ zIndex: "2" }} id="over_lord">
        <div id="full_nav" className="bg-blue-500">
          {/* Nav  ^^^ */}
          <div className="flex relative white flex-row justify-between">
            <a href={"/"} className="text-xl logo font-bold font-mono">
              INFOME
            </a>
            <div id="top_nav" className="bg-blue-500 flex hol small flex-row">
              <div className="flex hol small lg:flex-row md:flex-row flex-col">
                <h4 className=" font-bold">Catgories</h4>
                <h4>
                  <a href={"/category/Politics"} className=" font-bold">
                    Politics
                  </a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Education"}>Education</a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Business"}>Business</a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Technology"}>Technology</a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Entertainment"}>Entertainment</a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Sports"}>Sports</a>
                </h4>
                <h4 className=" font-bold">
                  <a href={"/category/Editor"}>Editor's Touch</a>
                </h4>
              </div>
            </div>
            <div className="img float-right">
              <img src={opt} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navBar;
