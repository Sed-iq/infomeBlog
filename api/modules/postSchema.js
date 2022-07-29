const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      require: true,
    },
    dislikes: {
      type: Number,
      require: true,
    },
    views: {
      type: Number,
      require: true,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("post", schema);
