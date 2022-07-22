const admin = require("./adminSchema"),
  bcrypt = require("bcryptjs");
function loginAuth(req, res) {
  let { username, password } = req.body;
  admin
    .findOne({ username: username })
    .then((data) => {
      if (data == "" || data == null) {
        res.status(404).json({});
      } else {
        bcrypt
          .compare(password, data.password)
          .then((result) => {
            if (result == true) {
              req.session.log = true;
              console.log("Logged in :", req.session.log);
              res.status(200).json({ location: "/dashboard" });
            } else {
              res.status(404).json();
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(404).json({});
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.json({});
    });
}
function isLogin(req, res, done) {
  if (req.session.log == true) {
    done();
  } else {
    res.status(404).end();
  }
}
module.exports.loginAuth = loginAuth;
module.exports.isLogin = isLogin;
// secure password
