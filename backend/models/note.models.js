import mongoose from "mongoose";

const { Schema, model } = mongoose;

const noteSchema = new Schema({
  content: { type: String, required: true },
  randomUrl: { type: String, required: true },
});

export const Note = model("Note", noteSchema);
