import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
// routes import
import userRouter from "./routes/user.routes.js";
// require dotnev
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes path handling
app.get("/", (req, res) => {
  res.send("app running");
});
app.use("/auth", userRouter);

// use PORT from .env
app.listen(process.env.PORT || 4000, () => {
  console.log(`app is running on port ${process.env.PORT || 4000}`);
});
