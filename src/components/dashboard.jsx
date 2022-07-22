import React, { Component, useState } from "react";
import DashEdit from "./newsComponents/dashEdit";
class dash extends Component {
  componentDidMount = () => {
    fetch("http://localhost:5000/", { credentials: "include" })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.isLogin == true) console.log("Logged In");
            else window.location = "/admin";
          });
        } else {
          window.location = "/admin";
        }
      })
      .catch((err) => {
        window.location = "/admin";
      });
  };

  render() {
    return (
      <div className="w-full">
        <DashEdit />
      </div>
    );
  }
}

export default dash;
