@"
# 🧩 API REST Node.js – Gestion MMO / Guildes / Joueurs

> Une API RESTful développée avec Node.js et Express, organisée de manière modulaire pour la gestion de ressources telles que les utilisateurs, guildes, événements et succès.  
> Ce projet sert de base pour toute application MMO-like ou système communautaire nécessitant une architecture back-end robuste et scalable.

---

## Sommaire

- [Présentation](#-présentation)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Lancement](#-lancement)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Explication des fichiers techniques](#-explication-des-fichiers-techniques)
- [Bonnes pratiques](#-bonnes-pratiques)
- [Contribuer](#-contribuer)
- [Licence](#-licence)

---

## Présentation

Ce projet implémente une architecture **REST complète** basée sur Express, en suivant une structure **MVC** claire :

- **Models** : définissent les entités de la base de données  
- **Controllers** : gèrent la logique métier  
- **Routes** : exposent les endpoints de l’API  
- **Middlewares** : gèrent les erreurs, la validation et la sécurité  
- **Services / Utils** : fonctions réutilisables et outils techniques  

---

## Prérequis

Avant de cloner le projet, assurez-vous d’avoir :

- **Node.js** ≥ 18  
- **npm** ≥ 9 (ou **yarn** si préféré)  
- **Docker** *(optionnel, pour le déploiement rapide via `docker-compose`)*  

---

## ⚙️ Installation

\`\`\`bash
# 1️⃣ Cloner le projet
git clone https://github.com/<TON_UTILISATEUR>/<TON_REPO>.git

# 2️⃣ Se rendre dans le dossier
cd api-rest-node

# 3️⃣ Installer les dépendances
npm install
\`\`\`

---

## Configuration

Créer un fichier `.env` à la racine du projet :

\`\`\`bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
DB_NAME=api_db
JWT_SECRET=supersecretkey
\`\`\`

> **Ne jamais versionner** le fichier `.env` (il est déjà ignoré par `.gitignore`).

---

## 🏁 Lancement

### En développement :

\`\`\`bash
npm run dev
\`\`\`

### En production :

\`\`\`bash
npm start
\`\`\`

### Avec Docker :

\`\`\`bash
docker-compose up --build
\`\`\`

---

##  Scripts disponibles

| Commande | Description |
|-----------|-------------|
| \`npm start\` | Lance le serveur en mode production |
| \`npm run dev\` | Lance le serveur avec \`nodemon\` |
| \`npm run lint\` | Analyse le code avec ESLint |
| \`npm run format\` | Formate le code avec Prettier |

---

##  Structure du projet

\`\`\`bash
.
├── config/
│   └── db.js                # Configuration et connexion à la base de données
├── controllers/             # Logique métier de chaque ressource (REST)
│   ├── usersController.js
│   ├── guildsController.js
│   └── ...
├── middleware/
│   ├── errorHandler.js      # Gestion centralisée des erreurs
│   └── notFound.js          # Middleware 404
├── models/                  # Modèles de données (ORM ou SQL brut)
│   ├── Users.js
│   ├── Guilds.js
│   └── ...
├── routes/                  # Fichiers de définition des routes Express
│   ├── usersRoutes.js
│   ├── guildsRoutes.js
│   └── ...
├── services/                # Logique applicative supplémentaire (ex: envoi d’email, tokens)
├── utils/
│   └── logger.js            # Logger centralisé (console, fichiers, etc.)
├── .editorconfig            # Normalisation du style entre IDE
├── .env                     # Variables d’environnement (non versionné)
├── .eslintrc.json           # Configuration du linter ESLint
├── .prettierrc              # Configuration du formateur Prettier
├── docker-compose.yml       # Orchestration Docker (app + DB)
├── Dockerfile               # Image Docker de l’application
├── package.json             # Dépendances, scripts et métadonnées du projet
├── package-lock.json        # Verrouillage des versions de dépendances
├── README.md                # Documentation du projet
└── server.js                # Point d’entrée de l’application Express
\`\`\`

---

## 📘 Explication des fichiers techniques

| Fichier | Rôle |
|----------|------|
| **\`.env\`** | Contient les variables sensibles (port, clés, DB). Non versionné. |
| **\`.editorconfig\`** | Uniformise le style entre éditeurs (indentation, fin de ligne, encodage). |
| **\`.eslintrc.json\`** | Définit les règles de **linting** JavaScript pour garder un code propre et cohérent. |
| **\`.prettierrc\`** | Configure **Prettier**, le formateur de code (espaces, guillemets, etc.). |
| **\`Dockerfile\`** | Décrit comment construire l’image Docker de l’application. |
| **\`docker-compose.yml\`** | Lance plusieurs services (API + base de données + volumes). |
| **\`package.json\`** | Contient les métadonnées, dépendances et scripts npm. |
| **\`server.js\`** | Point d’entrée : création du serveur Express, import des routes et middlewares. |

---

## 📦 Principales dépendances

| Catégorie | Librairies |
|------------|-------------|
| **Serveur / API** | \`express\`, \`cors\`, \`dotenv\`, \`helmet\` |
| **Base de données** | \`mysql2\` ou \`sequelize\` (selon config de \`db.js\`) |
| **Développement** | \`nodemon\`, \`eslint\`, \`prettier\` |
| **Sécurité / Auth** | \`jsonwebtoken\`, \`bcrypt\` |

> Les dépendances exactes sont listées dans le fichier \`package.json\`.

---

## 💡 Bonnes pratiques

- Respecter les conventions ESLint & Prettier avant chaque commit.  
- Utiliser les **services** pour toute logique réutilisable (hors routes/controllers).  
- Tenir la **documentation API** à jour (Postman, Swagger ou README dédié).  
- Tester localement via \`npm run dev\` avant de builder l’image Docker.  

---

## Contribuer

Les contributions sont les bienvenues !  
Créez une **branche** à partir de \`main\`, puis faites une **pull request** propre et commentée.

\`\`\`bash
git checkout -b feature/nom-fonctionnalite
git commit -m "feat: ajout de la fonctionnalité X"
git push origin feature/nom-fonctionnalite
\`\`\`

---

## 🪪 Licence

Ce projet est sous licence **MIT** — libre d’utilisation et de modification avec attribution.

---

> _Auteur : [Alexandre Baudouin]_  
>  _Dernière mise à jour : Octobre 2025_
"@ | Set-Content -Path ".\README.md"
