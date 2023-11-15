const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  artistID: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
