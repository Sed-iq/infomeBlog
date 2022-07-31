import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Picnews from "./newsComponents/pic_news";
import Banner from "./newsComponents/banner";
function Main({ name }) {
  let [data, setData] = useState([]);
  let endPoint = `http://localhost:5000/category/${name}`;
  useEffect(
    (e) => {
      axios
        .get(endPoint, { withCredentials: true })
        .then((data) => {
          setData((data = data.data));
        })
        .catch((err) => {
          window.location = "/err";
        });
    },
    [name]
  );
  return (
    <div className=" w-full sm:w-6/12">
      <div className="mt-4">
        <Banner data={`Here are all the articles on ${name}`} />
      </div>
      <div style={{ position: "sticky", top: "2em" }}>
        {data.map((post, index) => {
          {
            return (
              <Picnews
                link={post._id}
                image={post.image}
                key={index}
                title={post.title}
                snippet={post.snippet}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
export default function app() {
  const { name } = useParams("");
  return <Main name={name} />;
}
