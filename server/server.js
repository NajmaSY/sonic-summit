const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Artist = require("./models/artist");
const User = require("./models/user");
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

app.put("/artists/:id/favorite", async (request, response) => {
  try {
    const artistId = request.params.id;
    const userId = request.body.userId;

    //Find the user in the database
    const user = await User.findByIdAndUpdate(userId);

    //Check if the artist is already favorited by the user
    const isFavorited = user.favoriteArtists.some((fav) =>
      fav.equals(artistId)
    );

    if (!isFavorited) {
      //If not favorited, add the artist to the user's favorites
      user.favoriteArtists.push(artistId);
      //Save the updated user data
      await user.save();

      //Update the artist's favorites list
      const updatedArtist = await Artist.findByIdAndUpdate(
        artistId,
        { $push: { favorites: userId } },
        { new: true }
      );

      //updated artist data
      response.json(updatedArtist);
    } else {
      // If artist is already favorited by user
      response.status(400).json({ message: "Artist already favorited" });
    }
  } catch (error) {
    // Handle any errors that might occur during the process
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/artists/:id/schedule", async (request, response) => {
  try {
    const artistId = request.params.id;
    const userId = request.body.userId;

    const user = await User.findById(userId);
    const isScheduled = user.schedule.some((scheduled) =>
      scheduled.equals(artistId)
    );

    if (!isScheduled) {
      user.schedule.push(artistId);
      await user.save();

      const updatedArtist = await Artist.findByIdAndUpdate(
        artistId,
        { $push: { schedule: userId } },
        { new: true }
      );

      response.json(updatedArtist);
    } else {
      response.status(400).json({ message: "Artist already scheduled" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
