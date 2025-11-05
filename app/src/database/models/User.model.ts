import mongoose from "mongoose";

// Define a simple Mongoose model
const UserSchema = new mongoose.Schema({
  user_name: String,
  user_age: Number,
  user_gender: String,
});
const User = mongoose.model("User", UserSchema);

export default User;