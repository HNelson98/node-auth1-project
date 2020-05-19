const express = require("express");


const authRouter = require("../auth/router.js");

const server = express();


server.use(express.json());


server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;