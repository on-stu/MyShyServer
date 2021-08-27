const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    socialLogin: { type: String },
  },
  {
    collection: "users",
  }
);

const model = mongoose.model("UserSchema", UserSchema);
module.exports = model;
