/*
Original blog router code by Ikki Tenrio 17th july 2022, [Not original creation date]
*/
const express = require("express"),
  Router = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  cookie = require("cookie-parser"),
  session = require("express-session"),
  upload = require("./uploadController"),
  { loginAuth, isLogin } = require("./auth"),
  post = require("./postSchema");
let oneDay = 1000 * 60 * 60 * 24;

Router.use(bodyParser({ extended: true }));
Router.use(
  session({
    secret: "session",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: oneDay,
      httpOnly: true,
    },
  })
);
Router.use(cookie("supersecure"));
Router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // For legacy browsers
  })
);
Router.get("/", async (req, res) => {
  if (req.query.q == "tpbg") {
    await post
      .find()
      .sort({ createdAt: "descending" })
      .limit(1)
      .then((data) => {
        res.sendFile(
          path.join(__dirname + "./../../public/uploads/" + data[0].image)
        );
      });
  } else if (req.query.q == "all") {
    await post
      .find()
      .sort({ createdAt: "descending" })
      .then((data) => {
        res.status(200).json({ data: data, isLogin: req.session.log });
      })
      .catch((err) => {
        res.status(404).end();
        console.log(err);
      });
  } else {
    let data;
    post
      .find()
      .limit(100)
      .sort({ createdAt: "descending" })
      .then((result) => {
        (data = result), res.json({ data: data, isLogin: req.session.log });
      });
  }
});
Router.delete("/delete/:id", isLogin, (req, res) => {
  post
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(404).end();
      console.log(err);
    });
});
var cookieSettings = {
  maxAge: 50000,
  httpOnly: true,
  overwrite: true,
};
Router.post("/like/:id", (req, res) => {
  if (req.cookies.likeId == undefined) {
    post
      .findById(req.params.id)
      .then((data) => {
        post
          .findByIdAndUpdate(data._id, { likes: data.likes + 1 })
          .then((data) => {
            res.cookie("likeId", [req.params.id], cookieSettings);
            res.end();
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).end();
      });
  } else {
    req.cookies.likeId.forEach((like) => {
      if (like == req.params.id) {
        console.log("Already Liked", req.cookies);
      } else {
        console.log("like");
      }
    });
    // if (req.cookies.likeId[i] == req.params.id) {
    //   res.json({ liked: true });
    // } else {
    //   post.findById(req.params.id).then((data) => {
    //     post
    //       .findByIdAndUpdate(data._id, { likes: data.likes + 1 })
    //       .then((data) => {
    //         like_id.push(req.params.id);
    //         res.cookie("likeId", like_id, {
    //           maxAge: 50000,
    //           httpOnly: true,
    //         });
    //         console.log(req.cookies.likeId);
    //       });
    //   });
    // }
    // post.findByIdAndUpdate(req.params.id, { likes: +1 });
    // res.cookie("likeId", like_id, {
    //   maxAge: 50000,
    //   httpOnly: false,
    // });
  }
});
Router.post("/login", loginAuth);
Router.get("/category/:name", (req, res) => {
  post
    .find({ category: req.params.name })
    .sort({ createdAt: "descending" })
    .then((data) => {
      if (data == null || data == "") {
        res.status(404).end();
      } else {
        res.status(200).json(data);
      }
    })
    .catch((err) => res.status(404).json());
});

// Router.get("/set", ({ cookies }, res) => {
//   res.cookie("name", "sediq", { maxAge: 60000 });
//   console.log(cookies);
//   res.end();
// });
// Router.get("/clear", (req, res) => {
//   res.clearCookie("name");
//   res.end();
// });
Router.get("/article/:id", async (req, res) => {
  post
    .findOne({ _id: req.params.id })
    .then((data) =>
      post.findByIdAndUpdate(data._id, { views: data.views + 1 })
    );
  await post
    .findById(req.params.id)
    .then((data) => {
      if (data !== null || data !== "") {
        res.json(data);
        res.end();
      } else {
        res.status(404).end();
        res.end();
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});
// Adding a blog
Router.post("/post", isLogin, upload.single("image"), (req, res) => {
  const { body, title, snippet, category } = req.body,
    file = req.file.filename,
    Post = new post({
      title: title,
      body: body,
      snippet: snippet,
      image: file,
      category: category,
      likes: 0,
      views: 0,
      dislikes: 0,
    });
  Post.save()
    .then((data) => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      res.status(404);
    });
});
module.exports = Router;
