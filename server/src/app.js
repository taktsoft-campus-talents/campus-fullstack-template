import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./util/db-connect.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  return res.json({ msg: "Hello World" });
});

app.get("/users", async (_, res) => {
  try {
    const users = await db("users");
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
});

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
