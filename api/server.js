const express = require("express");
const authRouter = require("../auth/router.js");
const userRouter = require("../users/users-router")
const session = require('express-session')

const server = express();

const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.SECURE_COOKIE || false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOW_COOKIES || true,
  name: 'authtime',
  secret: process.env.COOKIE_SECRET || "keep it secret, keep it safe"
}

server.use(express.json());
server.use(session(sessionConfig))
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter)

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;