"use strict";
const path = require("path");
const express = require("express");
const pokemonRouter = require("./routers/pokemonRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/pokemon", pokemonRouter);
app.use("/users", userRouter);

app.use("/", express.static("./dist")); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(port);
