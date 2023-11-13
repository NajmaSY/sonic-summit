const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Artist = require("./models/artist");
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

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
