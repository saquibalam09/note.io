import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { Note } from "./models/note.models.js"; // Import the Note model
import connectionToDB from "./config/connectionToDB.js";
import { config } from "dotenv";
config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

import crypto from "crypto";

function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // Convert to hexadecimal format
    .slice(0, length); // Return required number of characters
}

// Connect to MongoDB
// mongoose.connect(
//   "mongodb+srv://saquibm860:uZcfav8APD5keNtB@cluster0.epjnv0i.mongodb.net",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Endpoint to create a note
app.post("/api/notes", async (req, res) => {
  try {
    const randomUrl = generateRandomString(8);
    const note = new Note({
      content: req.body.note,
      randomUrl: randomUrl,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get a note by its unique URL
app.get("/api/notes/:randomUrl", async (req, res) => {
  try {
    const randomUrl = req.params.randomUrl;
    const note = await Note.findOne({ randomUrl });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectionToDB(), console.log(`Server running on port ${PORT}`);
});
