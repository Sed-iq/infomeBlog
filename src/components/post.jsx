import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import comment from "./../../public/comment.png";
import Axios from "axios";
import Seen from "./../../public/seen.png";
function formatter(Dates) {
  if (Dates == undefined) {
    return false;
  } else {
    let da = new Date(Dates);
    return da.toDateString();
  }
}

function CommentParser(name, comment, time) {
  return (
    <div className="p-4 flex flex-col">
      <h4 className="text-sm font-bold py-2">{name.name}</h4>
      <h4 className="text-xs text-gray-700">
        I honestly think that the author of the post is very big headed, not
        only that but his head is very very large, he is very lonely and stupid.
      </h4>
      <h4 className="text-xs pt-4 self-end text-gray-600">19th, Nov 2022.</h4>
    </div>
  );
}
const imageParser = ({ image }) => {
  if (image == undefined) {
    return false;
  } else {
    return (
      <img
        src={require(`./../../public/uploads/${image}`)}
        width="70%"
        alt=""
      />
    );
  }
};
function post() {
  let { id } = useParams();
  let [post, setData] = useState({});
  let endPoint = `http://localhost:5000/article/${id}`;
  useEffect(() => {
    Axios.get(endPoint, { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        location = "/error";
        console.log(err);
      });
  }, [name]);
  return (
    <div className=" sm:p-4 flex sm:w-9/12  flex-col  sm:min-h-full ">
      <div className="sm:mt-16 sm:sticky sm:top-3  my-7">
        <h4
          dangerouslySetInnerHTML={{ __html: `${post.title}` }}
          className="text-center ml-10 text-w w-4/5 px-4 mb-4 font-sans font-bold text-3xl sm:text-4xl"
        ></h4>
        <div className="flex flex-row mt-10 justify-center">
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            By Abdullahi Sediq |
          </h4>
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            {post.category} |
          </h4>
          <div className=" text-gray-600 flex flex-row text-xs sm:text-sm font-light">
            <img src={Seen} alt="seen" className="w-5 inline" />
            <p>{post.views}</p>|
          </div>
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            Posted on {formatter(post.createdAt)}
          </h4>
        </div>
        <div className="mt-8 text-sm text-w sm:text-xl text-center text-gray-800 font-extralight sm:px-20 px-3">
          {/* Snippet goes here */}
          {post.snippet} <br />
          <b className="font-bold">[See Photo below]</b>
        </div>
        <div className="flex justify-center mt-10 rounded-sm">
          {
            // Image Goes here
            imageParser(post)
          }
        </div>
        <div className="mt-10 px-9 text-w max-w-full overflow-x-hidden sm:text-xl apple sm:px-20 ">
          <p
            dangerouslySetInnerHTML={{ __html: `${post.body}` }}
            id="body"
            className="text-justify px-4"
          ></p>
        </div>
        {/* Comments */}
        <div className="border-2 my-5 p-3 rounded border-gray-400">
          <div className="flex flex-row">
            <img src={comment} alt="comment" className="w-8" />
            <p className="text-sm pt-1 px-4">Comments</p>
          </div>
          <CommentParser name="Sediq Abdullahi" />
        </div>
        <div className="mt-5  px-4 flex flex-col">
          <p className="py-4 text-black text-sm">
            Did you like the post? Leave a comment.
          </p>
          <div className="p-4 flex flex-col">
            <input
              type="text"
              maxLength={70}
              placeholder="Your name (optional)"
              className="border-2 py-2 mb-3 sm:w-5/12 text-sm transition focus:border-blue-600 border-black rounded w-full sm:p-2 px-2 focus:outline-none"
            />
            <textarea
              type="text"
              required
              placeholder="Write your comment..."
              className="border-2 py-3 mb-3 sm:w-5/12 text-sm transition focus:border-blue-600 border-black rounded w-full sm:p-2 px-2 focus:outline-none"
            ></textarea>
            <button className="p-3 sm:w-36  self-center sm:self-start bg-blue-600 rounded text-white font-bold">
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default post;
