# 🔗 Projet : To Do - Backend

## 📌 Description

Projet personnel de réalisation d'une API To-Do List.
Ce projet a pour objectif de m'entraîner à la création d'une base de données et à la mise en place de tous les endpoints nécessaires.
L'API sera ensuite reliée à un frontend en React.

Ce dépôt contient uniquement la partie backend.

## 🛠️ Technologies utilisées

- node.js (javascript)
- Express
- MongoDB

## 📦 Installation

```bash
git clone https://github.com/ton-utilisateur/nom-du-repo.git
cd nom-du-repo
npm install
npm start
```

## 🔑 Configuration

Ajouter un fichier .env et renseigner les variables d’environnement :

```
MONGODB_URI=mongodb://localhost:27017/todo-api

PORT=3000

```

## 🔧 API Endpoints

| Méthode  | URL          | Description                | Paramètres                                                                | Exemple de réponse                                                                                                     |
| -------- | ------------ | -------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/tasks`     | Récupère toutes les tâches | Aucun                                                                     | `[{"id":1,"content":"nouvelle tâche", "status" : "En cours" },{"id":2,"content":"nouvelle tâche 2, "status": "Fini"}]` |
| `POST`   | `/tasks`     | Crée une nouvelle tâche    | `{ "content": "nouvelle tâche" }` (JSON)                                  | `{ "message": "Task created"}`                                                                                         |
| `PUT`    | `/tasks/:id` | Modifie une tâche existant | `{ "content": "Mise à jour du contenu", status : "En cours/Fini"}` (JSON) | `{ "message": "Task modified" }`                                                                                       |
| `DELETE` | `/tasks/:id` | Supprime une tâche         | Aucun                                                                     | `{ "message": "Task deleted" }`                                                                                        |

---

### 🛠 **Explication des colonnes** :

- **Méthode** : Type de requête HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- **URL** : L'endpoint exact que l'API expose.
- **Description** : Ce que fait cet endpoint.
- **Paramètres** :
  - 🏷 **Route parameters** : Présents dans l'URL (`:id` par exemple).
  - 📩 **Body parameters** : Envoyés en JSON dans une requête `POST` ou `PUT`.
- **Exemple de réponse** : Un aperçu du JSON que l'API renvoie.

---

## 🚧 Améliorations possibles

Liste des améliorations futures:

- Créer les routes API :

  - PUT /tasks/:id → Modifier une tâche
  - DELETE /tasks/:id → Supprimer une tâche

Bonus (si temps dispo) :

- Système d’authentification
- Ajout de catégories

## ✍️ Auteur

[@CedrineM](https://github.com/CedrineM)

## 📜 Licence

Ce projet est un exercice personnel réalisé dans le cadre de mon apprentissage.
