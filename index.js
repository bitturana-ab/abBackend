// console.log("ab");
// import express from "express";
const express = require("express");
const app = express();
const port = 4000;
// require dotnev
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("app running");
});
app.get("/ab", (req, res) => {
  res.send("ab is listening");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Here</h1>");
});

// use PORT from .env
app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
