const mongoose = require("mongoose"),
  schema = mongoose.Schema({
    username: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      require: true,
    },
  });

module.exports = mongoose.model("admin", schema);
