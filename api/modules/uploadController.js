const path = require("path");

const multer = require("multer"),
  storage = multer.diskStorage({
    destination: (err, file, cb) => {
      cb(null, path.join(__dirname + "./../../public/uploads"));
    },
    filename: (err, file, cb) => {
      cb(null, `image_${Date.now()}_${file.originalname}`);
    },
  });
module.exports = multer({ storage: storage });
