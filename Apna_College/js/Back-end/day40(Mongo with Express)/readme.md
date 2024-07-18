const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));