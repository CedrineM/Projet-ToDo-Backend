//importation des packages requis
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//connection à la base de donnée
mongoose.connect(process.env.MONGODB_URI);

//création du serveur
const app = express();
app.use(express.json());

//autorisation des demandes provenant de l'extérieur
app.use(cors());

//importation des différents chemins
const taskRoutes = require("./routes/task");
app.use(taskRoutes);

//chemin d'acceuil
app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Bienvenue sur ToDo" });
  } catch (error) {
    console.error;
    return res.status(500).json({ message: "Internal server error" });
  }
});

//Tous les chemins non existant
app.all("*", (req, res) => {
  return res.status(404).json({ message: "This page not existe" });
});

//mise en ligne du serveur
app.listen(process.env.PORT, () => {
  console.log("Server ON");
});
