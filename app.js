import express from "express";
import dbConnect from "./config/dbConnect.js";
const app = express();
dbConnect();
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.get("*", (req, res) => {
  res.send("OOPS ! Page Not Found");
});

export default app;
