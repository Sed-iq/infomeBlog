import React, { Component } from "react";
import like from "./../../../public/Thumbup.png";
import dislike from "./../../../public/Thumbdown.png";
import Axios from "axios";
class noPic extends Component {
  state = {
    likes: this.props.post.likes,
  };
  formatter = (Dates) => {
    if (Dates == undefined) {
      return false;
    } else {
      let da = new Date(Dates);
      return da.toDateString();
    }
  };
  likeParser = ({ likes }) => {
    return this.state.likes;
  };
  liker = ({ _id }) => {
    const endPoint = `http://localhost:5000/like/${_id}`;
    fetch(endPoint, {
      method: "POST",
      credentials: "include",
    });
  };
  render() {
    return (
      <div className="no_pic overflow-x-hidden sm:ml-6 w-full p-2 sm:w-10/12 flex flex-col my-3 border-2 border-gray-300">
        <a href={this.props.link}>
          <h4 className="font-bold mb-4 text-sm text-center sm:text-xl font-serif">
            {this.props.post.title}
          </h4>
          <p className="font-sans whitespace-pre-wrap text-xs sm:text-sm w-full border-3 ">
            {this.props.post.snippet}
          </p>
        </a>
        <div className=" flex mt-3 flex-row">
          <div className="mx-4 pt-2 bg-white flex flex-row">
            <img src={like} alt="like" className="w-8 inline-block mx-1" />
            <small className="pt-1">{this.likeParser(this.props.post)}</small>
          </div>
          <p className="font-sans pt-4 justify-self-end text-gray-700 text-right whitespace-pre-wrap text-xs sm:text-xs w-full border-3 ">
            {this.formatter(this.props.post.createdAt)}
          </p>
        </div>
      </div>
    );
  }
}

export default noPic;
