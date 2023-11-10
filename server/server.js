const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());

app.get("/", (_, response) =>
  response.json("You are looking at my root route")
);

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
