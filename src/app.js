// server ko create karne ke liye express ka use kiya hai

const express = require("express");

const app = express();

// simple middleware
app.use(express.json());

// title and description
const notes = [];

// api ka name notes and api ka method post

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({ message: "note created successfully" });
});

//create new api  get method
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

// api method delete     delete /notes/:index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: "notes deleted successfully",
  });
});

// Patch method use for update in server

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;

  const discription = req.body.discription;

  notes[index].description = discription;

  res.status(200).json({
    message: "note updated successfully!",
  });

  res.status;
});



module.exports = app;
