const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  description: String,
  imageUrl: String,
  stage: String,
  stageTime: Number,
  favourite: Boolean,
  youtube: String,
  instagram: String,
  facebook: String,
  rating: Number,
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
