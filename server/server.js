const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Artist = require("./models/artist");
const Like = require("./models/like");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) =>
  response.json("You are looking at my root route")
);

app.get("/artists", async (request, response) => {
  try {
    const artists = await Artist.find(request.query);
    response.json(artists);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Artist Not Found");
  }
});

app.post("/artists", async (request, response) => {
  try {
    const newArtist = await Artist.create(request.body);
    response.status(201).json(newArtist);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Artist Not Created");
  }
});

app.delete("/artists/:id", async (request, response) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(request.params.id);
    response.status(204).json(deletedArtist);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Artist Not Deleted");
  }
});

app.put("/artists/:id", async (request, response) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.json(updatedArtist);
  } catch (error) {
    console.log(error);
    response.status(418).json("404 Artist Not Found");
  }
});

app.put("/artists/:id/favourite", async (request, response) => {
  try {
    const userEmail = request.body.email; //with the likes(favourite)

    //find user's likes
    const likes = await Like.find({ email: userEmail });

    const artistIds = likes.map((like) => like.artistId);

    //find artists with the found artistIds
    const favourites = await Artist.find({ _id: { $in: artistIds } });
    response.status(200).json(favourites);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "internal server error" });
  }
});

app.get("/MySchedule", async (request, response) => {
  try {
    const userEmail = request.query.userEmail;

    //Find all likes for the user in the database
    const likes = await Like.find({ email: userEmail });

    //Extract artistIds from the likes
    const artistIds = likes.map((like) => like.artistId);

    //Find all artists with the extracted artistIds
    const schedule = await Artist.find({ _id: { $in: artistIds } });

    response.status(200).json(schedule);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
