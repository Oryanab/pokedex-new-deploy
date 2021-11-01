"use strict";
const path = require("path");
const express = require("express");
const pokemonRouter = require("./routers/pokemonRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
app.use("/pokemon", pokemonRouter);
app.use("/users", userRouter);

app.use("/", express.static(path.resolve("../dist"))); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(
    path.resolve(
      "C:\\Users\\oa99b\\Documents\\GitHub\\pokedex-new-deploy\\dist\\index.html"
    )
  );
});

app.listen(port);
