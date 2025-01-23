const mongoose = require("mongoose");
const blogify = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    Photo: {
      type: String,
    },
    Video: {
      type: String,
    },
  },
  { timestamps: true }
);
const blog = mongoose.model("blog", blogify);
module.exports = blog;
