const express = require("express"),
  app = express(),
  dotenv = require("dotenv").config(),
  starter = require("./db"),
   Router  = require("./modules/routes");

app.use(Router);
starter(app, process.env.DB_PORT);
