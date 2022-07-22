import React, { Component } from "react";
import { Link } from "react-router-dom";
class footer extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* border-2 border-red-400 */}
        <div className="footer flex justify-between flex-col sm:flex-row w-full bg-black text-gray-300 text-sm font-light p-2">
          <div className="about sm:w-5/12 flex mb-4 sm:m-0 flex-col sm:p-4 p-2">
            <div className="sm:text-xl text-center sm:text-left mb-4 font-bold text-xl">
              About Us
            </div>
            <div className="text-sm font-serif">
              We are here to offer you a top quality gist on the hottest topics
              as they land. We serve you you intrests at your finger tips , not
              need to search the categories that you like we will serve it to
              you when visit.
            </div>
          </div>
          <div className="socials text-center sm:text-left p-4 flex flex-col">
            <div className="font-bold font-mono mb-3 text-xl">
              Follow our socials
            </div>
            <div className="flex flex-col sm:items-center">
              <button className="font-sm mb-2 md:w-full p-2 w-full font-bold sm:text-center rounded sm:w-3/6 bg-gray-900">
                Facebook
              </button>
              <button className="font-sm mb-2 p-2 md:w-full w-full font-bold sm:text-center rounded sm:w-3/6 bg-gray-900">
                Twitter
              </button>
              <button className="font-sm p-2 w-full md:w-full font-bold sm:text-center rounded sm:w-3/6 bg-gray-900">
                Instagram
              </button>
            </div>
          </div>
          <div className="socials p-4 flex flex-col ">
            <div className="font-bold text-center sm:text-left mb-3 text-xl">
              Do have any message for us?
            </div>
            <div className="p-3 flex flex-row">
              {/* Remember to send add a form */}
              <div className="inp">
                <input
                  type="text"
                  className="p-3 text-white bg-gray-600 focus:outline-none"
                  placeholder="Indicate a contact line"
                />
              </div>
              <div>
                <button className="p-3 font-bold focus:outline-none text-white bg-blue-600">
                  Send
                </button>
              </div>
            </div>
            <div className="mt-4 ">
              <Link className="w-full flex sm:justify-center" to="/admin">
                <button className="font-sm p-2 w-full md:w-2/5 font-bold sm:text-center rounded sm:w-3/6 bg-gray-900">
                  Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
