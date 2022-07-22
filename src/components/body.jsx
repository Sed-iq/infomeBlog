import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoPic from "./newsComponents/no_pic";

class body extends Component {
  render() {
    return (
      <div className=" w-full">
        <div id="blog_body" className="flex p-3 lg:p-5w flex-col ">
          <div
            id="main_blog"
            className=" md:min-h-max sm:w-full lg:flex lg:flex-col lg:items-centers w-full "
          >
            {this.props.value.map((post, index) => {
              if (index == 0) {
                this.props.value.shift();
                return (
                  <Link key={index} to={`/article/${post._id}`}>
                    <div
                      style={{
                        backgroundImage: "url(http://localhost:5000/?q=tpbg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="top_post h-48 md:h-72 lg:h-96 lg:w-full flex flex-col md:justify-center lg:justify-center justify-end items-center relative "
                    >
                      <div className="sub_write lg:mb-0 md:mb-0 mb-3 min-h-3/6 p-4">
                        <div className="title">
                          <h2
                            dangerouslySetInnerHTML={{ __html: post.title }}
                            className=" text-sm lg:text-4xl text-justify md:text-xl font-bold"
                          ></h2>
                        </div>
                        <div className="snip">
                          <h4 className="text-sm lg:px-11 pt-3 text-center text-gray-700 font-bold lg:mt-6 lg:text-sm md:text-xs">
                            {post.snippet}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
            {/* Components go here */}
            {this.props.value.map((post, index) => {
              return (
                <NoPic key={index} link={`/article/${post._id}`} post={post} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default body;
