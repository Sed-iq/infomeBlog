import React, { useState, useEffect } from "react";
import NoPic from "./newsComponents/no_pic";
import Axios, { AxiosError } from "axios";
import Banner from "./newsComponents/banner";
function App() {
  let endPoint = `http://localhost:5000/?q=all`;
  var [post, setPost] = useState([]);
  useEffect(() => {
    Axios.get(endPoint, { withCredentials: true })
      .then((res) => {
        if (res.data.isLogin == true) {
          setPost(res.data.data);
        } else {
          location = "/admin";
        }
      })
      .catch((err) => {
        location = "/admin";
      });
  }, [name]);
  return (
    <div className="">
      <Banner data="Click to Delete" width={""} />
      {post.map((value, index) => {
        return (
          <div key={index} onClick={() => Delete(value._id, post, setPost)}>
            <NoPic post={value} />
          </div>
        );
      })}
    </div>
  );
}
function Delete(data, post, set) {
  let endPoint = `http://localhost:5000/delete/${data}`;
  Axios.delete(endPoint, { withCredentials: true })
    .then((response) => {
      if (response.status == 200) {
        let Post = [...post];
        let newPst = Post.filter((d, ind) => {
          return d._id != data;
        });
        set(newPst);
      } else {
        window.location = "/admin";
      }
    })
    .catch((error) => {
      window.location = "/admin";
    });
}
export default App;
