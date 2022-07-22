const mongoose = require("mongoose");

module.exports = (server, url) => {
  mongoose.connect(url, (err) => {
    if (!err) server.listen(5000, console.log("5000"));
    else {
      server.listen(
        5000,
        console.error("Server running on safe mode database error \n")
      );
    }
  });
};
