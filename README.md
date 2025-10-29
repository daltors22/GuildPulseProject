# API REST Node.js – Gestion MMO / Guildes / Joueurs

> API RESTful modulaire développée avec **Node.js** et **Express**, conçue pour la gestion des utilisateurs, guildes, événements et succès.  
> Base solide pour toute application MMO-like ou communautaire nécessitant une architecture claire et scalable.

---

## Sommaire
- [Présentation](#présentation)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement](#lancement)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Fichiers techniques](#fichiers-techniques)
- [Bonnes pratiques](#bonnes-pratiques)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Présentation

Architecture **MVC** structurée :
- **Models** : structures de données
- **Controllers** : logique métier
- **Routes** : endpoints REST
- **Middlewares** : gestion des erreurs, validation, sécurité
- **Services / Utils** : fonctions réutilisables (auth, logs, etc.)

---

## Prérequis

- **Node.js** ≥ 18  
- **npm** ≥ 9  
- **Docker** *(optionnel)*

---

## Installation

```bash
git clone git@github.com:daltors22/GuildPulseProject.git
cd GuildPulseProject
npm install
Configuration

Créer un fichier .env à la racine du projet (non versionné) et y renseigner vos variables locales :

# Exemple - à adapter à votre environnement
PORT=3000
DB_HOST=localhost
DB_USER=admin
DB_PASS=password
DB_NAME=guildpulse
JWT_SECRET=cle_secrete_unique

⚠️ Le fichier .env ne doit jamais être partagé ni versionné (déjà ignoré dans .gitignore).
Lancement

# Mode développement
npm run dev

# Mode production
npm start

# Via Docker
docker-compose up --build
Scripts disponibles

| Commande | Description |
|-----------|-------------|
| npm start | Exécution en production |
| npm run dev | Exécution avec nodemon |
| npm run lint | Vérification ESLint |
| npm run format | Formatage Prettier |
Structure du projet
.
├── config/
│   └── db.js                # Connexion et configuration base de données
├── controllers/
│   ├── usersController.js
│   ├── guildsController.js
│   └── ...
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
├── models/
│   ├── Users.js
│   ├── Guilds.js
│   └── ...
├── routes/
│   ├── usersRoutes.js
│   ├── guildsRoutes.js
│   └── ...
├── services/
├── utils/
│   └── logger.js
├── .editorconfig
├── .env
├── .eslintrc.json
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
└── server.js
```
Fichiers techniques

| Fichier | Description |
|----------|-------------|
| .env | Variables d’environnement locales (non versionné) |
| .editorconfig | Normalisation du style entre éditeurs |
| .eslintrc.json | Règles ESLint |
| .prettierrc | Configuration Prettier |
| Dockerfile | Construction image Docker |
| docker-compose.yml | Déploiement orchestré |
| package.json | Dépendances et scripts |
| server.js | Point d’entrée Express |
Dépendances principales

| Catégorie | Packages |
|------------|-----------|
| Serveur / API | express, cors, dotenv, helmet |
| Base de données | mysql2 ou sequelize |
| Développement | nodemon, eslint, prettier |
| Auth / Sécurité | jsonwebtoken, bcrypt |
Bonnes pratiques

- Lancer npm run lint et npm run format avant chaque commit.
- Centraliser la logique réutilisable dans services/.
- Documenter les endpoints via Postman, Swagger ou fichier dédié.
- Tester localement avant tout build Docker.
Contribuer

Les contributions sont encouragées :
Créez une branche propre à votre fonctionnalité, puis soumettez une pull request claire et commentée.
```bash
git checkout -b feature/nom-fonctionnalite
git commit -m "feat: ajout de la fonctionnalité X"
git push origin feature/nom-fonctionnalite
```
Licence

Projet sous licence MIT — libre d’utilisation et de modification avec attribution.

Auteur : @daltors22
Dernière mise à jour : Octobre 2025
"@ | Set-Content -Path ".\README.md"
