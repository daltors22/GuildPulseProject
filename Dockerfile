# Utilise Node 20 LTS
FROM node:20

# Crée le dossier app dans le conteneur
WORKDIR /usr/src/app

# Copie package.json et package-lock.json d'abord (pour cache Docker)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du projet
COPY . .

# Expose le port défini dans .env (par défaut 3000)
EXPOSE 3000

# Commande pour lancer l'API avec nodemon pour dev
CMD ["npx", "nodemon", "--legacy-watch", "server.js"]
