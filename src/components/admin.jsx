import React, { Component } from "react";
class admin extends Component {
  state = {
    error:
      " text-center opacity-0 mt-4 sm:max-w-full min-w-0 bg-red-600 rounded p-2 text-white",
    erorrValue: "",
  };
  componentDidMount = () => {
    fetch("http://localhost:5000/", { credentials: "include" })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.isLogin == true) location = "/dashboard";
            else return false;
          });
        } else {
          window.location = "/error";
        }
      })
      .catch((err) => {
        window.location = "/error";
      });
    if (this.props.error) {
      this.setState({
        error:
          "text-center mt-4 sm:max-w-full min-w-0 bg-red-600 rounded p-2 text-white",
        erorrValue: this.props.error,
      });
    } else {
      return false;
    }
  };
  parse = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          let error = this.state.error;
          error += " opacity-0";
          this.setState({ error: error });
          let err = this.state.erorrValue;
          err = "";
          this.setState({ erorrValue: err });
          response.json().then((data) => {
            if (data) {
              window.location = data.location;
            } else {
              return false;
            }
          });
        } else {
          let error = this.state.error;
          let op = error.replace("opacity-0", "");
          this.setState({ error: op });
          let err = this.state.erorrValue;
          err = "Incorrect Username or Password";
          this.setState({ erorrValue: err });
        }
      })
      .catch((e) => {
        let error = this.state.error;
        let op = error.replace("opacity-0", "");
        this.setState({ error: op });
        let err = this.state.erorrValue;
        err = "An Erorr has occured, Please try again";
        this.setState({ erorrValue: err });
      });
  };
  render() {
    return (
      <div className="w-full p-3 sm:p-0 flex justify-center">
        <div className=" w-full sm:flex sm:flex-col ">
          <div
            id="shadow"
            className="sm:w-3/6 w-full sm:sticky sm:top-24 sm:mt-12 self-center rounded p-4 sm:p-7 bg-blue-500"
          >
            <p className="text-white font-bold sm:text-xl text-sm">
              Admin Login
            </p>
            <div className={this.state.error}>{this.state.erorrValue}</div>
            <form
              action="http://localhost:5000/login"
              onSubmit={(e) => {
                this.parse(e);
              }}
              method="post"
            >
              <div className="logins p-4 flex flex-col justify-center 0 ">
                <label
                  className="text-white mt-3 sm:text-sm sm:font-bold"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Username"
                  className="  p-2 bg-gray-300 focus:bg-white focus:outline-none mb-4 rounded text-black font-light font-serif"
                />

                <label
                  className="text-white sm:text-sm sm:font-bold text-lg"
                  htmlFor="username"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-300 p-2 focus:bg-white focus:outline-none rounded text-black font-serif"
                />
                <button
                  id="shadow"
                  type="submit"
                  className="px-4 py-2 mt-4 rounded hover:outline-none bg-blue-900 text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default admin;
