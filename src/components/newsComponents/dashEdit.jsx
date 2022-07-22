import React, { Component } from "react";
import Title from "./../../../public/Title100.png";
import Post from "./../../../public/Post100.png";
import Snippets from "./../../../public/Snippets100.png";
import Body from "./../../../public/Body100.png";
import Image from "./../../../public/img.png";
import Category from "./../../../public/Trend100.png";
import Banner from "./banner";
import { Link } from "react-router-dom";
class dashEdit extends Component {
  state = {
    banner: "Welcome Admin, create a new post",
  };
  parseToCanva = (file) => {
    let preview = document.querySelector("#preview");
    let reader = new FileReader();
    let data = reader.readAsDataURL(file.target.files[0]);
    reader.addEventListener("load", (url) => {
      let data = url.target.result;
      let image = document.createElement("img");
      image.srcset = data;
      image.addEventListener("load", (e) => {
        if (e.target.height > e.target.width) {
          file.target.value = "";
          alert("Image not suitable for use dimension is too long");
        } else {
          this.draw(preview, data);
        }
      });
    });
  };
  draw = (image, data) => {
    image.src = data;
  };
  postHandler = (e) => {
    e.preventDefault();
    let file = document.querySelector("#file"),
      { target } = e,
      endPoint = "http://localhost:5000/post",
      formData = new FormData();
    formData.append("image", file.files[0]);
    formData.append("title", target[0].value);
    formData.append("snippet", target[1].value);
    formData.append("body", target[2].value);
    formData.append("category", target[4].value);
    fetch(endPoint, {
      credentials: "include",
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status == 200) {
          this.setState({ banner: "Story has been posted..!" });
          for (let i = 0; i <= 4; i++) {
            target[i].value = "";
          }
          let preview = document.getElementById("preview");
          preview.src = "";
        } else {
          this.setState({ banner: "An Error occurred during the post" });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className=" h-full">
        <Banner width={"lg:w-3/5"} data={this.state.banner} />
        <form onSubmit={(e) => this.postHandler(e)}>
          <div className="my-4 sm:ml-10 px-2 flex flex-col">
            <div className="flex lg:w-3/5 flex-row border-2  rounded border-gray-500 p-4">
              <img src={Title} alt="" className=" w-7 h-7 " />
              <input
                onFocus={() =>
                  this.setState({ banner: "Welcome Admin, create a new post" })
                }
                type="text"
                className="bg-white focus:outline-none active:outline-none font-bold box-border  w-full px-2"
                name="title"
                id="title"
                required
                minLength={6}
                maxLength={60}
                placeholder="Write a title..."
              />
            </div>

            <div className="flex lg:w-3/5 mt-2 flex-row border-2  rounded border-gray-500 p-4">
              <img src={Snippets} alt="" className=" w-7 h-7 " />
              <textarea
                onFocus={() =>
                  this.setState({ banner: "Welcome Admin, create a new post" })
                }
                name=""
                placeholder="Write a snippet..."
                className="bg-white w-full focus:outline-none px-2 font-semibold max-h-14"
                id="snippet"
                minLength={8}
                required
                cols="10"
                rows="10"
                maxLength={70}
              ></textarea>
            </div>

            <div className="flex lg:w-3/5 mt-2 flex-row border-2  rounded border-gray-500 p-4">
              <img src={Body} alt="" className=" w-7 h-7 " />
              <textarea
                onFocus={() =>
                  this.setState({ banner: "Welcome Admin, create a new post" })
                }
                name=""
                placeholder="Write the main story..."
                className="bg-white w-full focus:outline-none px-2 font-semibold "
                required
                id="body"
                minLength={20}
                cols="10"
                rows="10"
              ></textarea>
            </div>

            <div className=" rounded p-4">
              <img id="preview" src="" alt="" />
            </div>

            <div className="flex lg:w-3/5 mt-2 flex-row border-2  rounded border-gray-500 p-4">
              <img src={Image} alt="" className=" w-7 h-7 " />
              <input
                type="file"
                className="bg-white focus:outline-none active:outline-none font-bold box-border  w-full px-2"
                name="title"
                required
                accept="image/jpeg, image/png"
                onChange={(e) => {
                  this.setState({ banner: "Welcome Admin, create a new post" });
                  this.parseToCanva(e);
                }}
                id="file"
                placeholder="Add an image"
              />
            </div>

            <div className="flex lg:w-3/5 mt-2 flex-row border-2  rounded border-gray-500 p-4">
              <img src={Category} alt="" className=" w-7 h-7 " />
              <label htmlFor="Categories" className="text-sm px-4 font-bold">
                Select the Category
              </label>
              <select name="" required className="w-full bg-white" id="">
                <option value="Politics">Politics</option>
                <option value="Education">Education</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Sports">Sports</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Editor">Editor's Touch</option>
              </select>
            </div>

            <div className="flex lg:w-3/5 mt-2 flex-row border-2 justify-between rounded border-gray-500 p-4">
              <Link to={"/all"}>
                <button
                  type="button"
                  className="bg-blue-500 p-2 px-3 rounded text-white"
                >
                  View all blogs
                </button>
              </Link>
              <button
                type="submit"
                className="bg-blue-700 flex flex-row p-2 px-3 rounded text-white"
              >
                Post
                <img src={Post} alt="" className=" w-7 h-7 " />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default dashEdit;
