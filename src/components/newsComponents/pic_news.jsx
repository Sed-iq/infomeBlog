import React, { Component } from "react";
import { Link } from "react-router-dom";
class picNews extends Component {
  imageParser = () => {
    if (this.props.image == undefined) {
      return false;
    } else {
      return (
        <img
          id="cat_img"
          src={require(`./../../../public/uploads/${this.props.image}`)}
          alt=""
        />
      );
    }
  };
  render() {
    return (
      <div className="overflow-x-hidden">
        <div className="sm:mt-4 mt-3 flex flex-col tab">
          <Link to={`/article/${this.props.link}`}>
            <div>{this.imageParser()}</div>
            <div className="news_holder lg:flex lg:flex-col md:flex md:flex-col">
              <div className="lg:p-4 flex flex-col  p-2">
                {/* Title of the blog */}
                <h2 className=" font-bold mb-2 font-serif lg:text-xl">
                  {this.props.title}
                </h2>
                {/* Snippet of the blog */}
                <h3 className="text-gray-700 font-sans">
                  {this.props.snippet}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default picNews;
