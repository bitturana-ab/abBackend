// console.log("ab");
import express from "express";
const app = express();
const port = 4000;
import bodyParser from "body-parser";
// routes import
import userRouter from "./routes/user.routes.js";
// require dotnev
require("dotenv").config();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("app running");
});
app.get("/ab", (req, res) => {
  res.send("ab is listening");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Here</h1>");
});
app.use("/auth", userRouter);

// use PORT from .env
app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
