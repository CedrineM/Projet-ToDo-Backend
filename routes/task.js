// importation des packages requis
const express = require("express");
const mongoose = require("mongoose");

//importation modèles utiliser
const Task = require("../models/Task");
const { error } = require("console");

// permettre la création de chemin
const router = express.Router();

// Create
router.post("/tasks", async (req, res) => {
  try {
    if (req.body.content) {
      const newTask = new Task({
        content: req.body.content,
      });
      await newTask.save();
      return res.status(201).json({ message: "Task created" });
    }
    throw { status: 400, message: "Task content is missing" };
  } catch (error) {
    console.error;
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error server" });
  }
});
// Read
router.get("/tasks", async (req, res) => {
  try {
    const response = await Task.find();
    if (response.length !== 0) {
      return res.status(200).json(response);
    } else {
      return res.status(200).json({ message: "Tasks list is empty !" });
    }
  } catch (error) {
    console.error;
    res.status(500).json({ message: "Internal error server" });
  }
});

// Update
router.post("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (task) {
      if (req.body.content) {
        task.content = req.body.content;
      }
      if (task.status !== req.body.status) {
        task.status = req.body.status;
      }
      await task.save();
      return res.status(200).json({ message: "Task was modified" });
    }
    throw { status: 400, message: "this Task not exist" };
  } catch (error) {
    console.error;
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error server" });
  }
});

// Delete
router.delete("/tasks/:id", async (req, res) => {
  try {
    if (await Task.findById(req.params.id)) {
      await Task.deleteOne({ _id: req.params.id });
      return res.status(200).json({ message: "Task deleted" });
    }
    throw { status: 400, message: "this Task not exist" };
  } catch (error) {
    console.error;
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal error server" });
  }
});

module.exports = router;
