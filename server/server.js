const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());

app.get("/", (_, response) =>
  response.json("You are looking at my root route")
);

app.get("/festival", async (request, response) => {
  try {
    const artists = await Artist.find(request.query);
    response.json(artists);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Artist Not Found");
  }
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
