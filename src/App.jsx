import React, { useState, useEffect } from "react";
import Header from "./components/head";
import "./../public/output.css";
import "./index.css";
import Body from "./components/body";
import Footer from "./components/footer";
import Sidenav from "./components/sideNav";
import Admin from "./components/admin";
import Dashboard from "./components/dashboard";
import Post from "./components/post";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/category.jsx";
import Error from "./components/error";
import All from "./components/all";
function App() {
  let [post, setData] = useState([]);
  let [sidePost, setSide] = useState([]);
  useEffect(
    (e) => {
      const endPoint = "http://localhost:5000";
      Axios.get(endPoint, { withCredentials: true })
        .then((data) => {
          setData((post = data.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [name]
  );
  return (
    <div className="min-w-full w-full sm:flex sm:flex-col min-h-full ">
      <BrowserRouter>
        <Header />
        <div className="flex  flex-col sm:justify-between sm:flex-row">
          <Routes>
            <Route path="/" element={<Body value={post} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/article/:id" element={<Post />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/all" element={<All />} />
            s <Route path="*" element={<Error />} />
          </Routes>
          <Sidenav value={[{ title: "N/A" }]} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
