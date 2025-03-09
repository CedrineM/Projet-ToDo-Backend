// importation des packages requis
const express = require("express");
const mongoose = require("mongoose");

//importation modèles utiliser
const Task = require("../models/Task");

// permettre la création de chemin
const router = express.Router();

// Create
router.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task({
      content: req.body.content,
    });

    await newTask.save();
    res.status(201).json({ message: "Task created" });
  } catch (error) {
    console.error;
    res.status(500).json({ message: "Internal error server" });
  }
});
// Read
// Update
// Delete

module.exports = router;
