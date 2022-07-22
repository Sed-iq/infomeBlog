import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
function formatter(Dates) {
  if (Dates == undefined) {
    return false;
  } else {
    let da = new Date(Dates);
    return da.toDateString();
  }
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
    <div className=" sm:p-4 flex flex-col sm:min-h-full w-full">
      <div className="sm:mt-16  sm:sticky sm:top-3  my-7">
        <h4
          dangerouslySetInnerHTML={{ __html: post.title }}
          className="text-center mb-4 font-sans font-bold text-3xl sm:text-4xl"
        >
          {/* title */}
        </h4>
        <div className="flex flex-row mt-10 justify-center">
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            By Abdullahi Sediq |
          </h4>
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            {post.category} |
          </h4>
          <h4 className=" text-gray-600 text-xs sm:text-sm font-light">
            Posted on {formatter(post.createdAt)}
          </h4>
        </div>
        <div className="mt-8 text-sm sm:text-xl text-justify text-gray-800 font-extralight sm:px-20 px-10">
          {/* Snippet goes here */}
          {post.snippet}
          <b className="font-bold">[See Photo below]</b>
        </div>
        <div className="flex justify-center mt-10 rounded-sm">
          {
            // Image Goes here
            imageParser(post)
          }
        </div>
        <div className="mt-10 px-9 max-w-full overflow-x-hidden sm:text-xl apple sm:px-20 ">
          <p
            dangerouslySetInnerHTML={{ __html: `${post.body}` }}
            id="body"
            className="text-justify"
          ></p>
        </div>
      </div>
    </div>
  );
}
export default post;
