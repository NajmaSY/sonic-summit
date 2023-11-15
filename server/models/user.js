const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // other user fields...
  favoriteArtists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
  schedule: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
