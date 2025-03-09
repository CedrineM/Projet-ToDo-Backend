//importation des packages nécessaires
const mongoose = require("mongoose");

//création du modèle Task créer lors d'ajout de tache
const Task = mongoose.model("Task", {
  content: { type: String, require: true },
  status: { type: String, enum: ["En cours", "Fini"], default: "En cours" },
});

module.exports = Task;
