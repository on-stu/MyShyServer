const mongoose = require("mongoose");

const SingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    creatorId: { type: String, required: true },
    creatorNickname: { type: String, required: true },
    createdAt: { type: String, required: true },
    description: { type: String },
    likes: { type: Number },
    comments: { type: Array },
    url: { type: String, required: true, unique: true },
  },
  {
    collection: "sings",
  }
);

const model = mongoose.model("SingSchema", SingSchema);
module.exports = model;
