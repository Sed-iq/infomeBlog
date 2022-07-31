const express = require("express"),
  app = express(),
  dotenv = require("dotenv").config(),
  starter = require("./db"),
  Router = require("./modules/routes");

app.use(Router);
starter(app, "mongodb+srv://Trustadmin:Testimony1@cluster0.t9mbj.mongodb.net/");
