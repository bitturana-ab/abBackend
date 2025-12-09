import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.Model("User", UserSchema);
export default User;
