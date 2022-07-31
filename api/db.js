const mongoose = require("mongoose");

module.exports = (server, url) => {
  mongoose.connect(url, (err) => {
    console.log(url);
    if (!err) server.listen(process.env.PORT || 5000, console.log("5000"));
    else {
      server.listen(
        process.env.PORT || 5000,
        console.error("Server running on safe mode database error \n")
      );
    }
  });
};
