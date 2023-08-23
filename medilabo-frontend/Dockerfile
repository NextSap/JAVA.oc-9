# Utiliser une image Node.js comme base
FROM node:14

# Copier les fichiers de package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu de l'application dans le répertoire de travail du conteneur
COPY . .

# Construire l'application Next.js pour la production
RUN npm run build

# Exposer le port sur lequel l'application écoute (par défaut Next.js écoute sur le port 3000)
EXPOSE 3000

# Commande pour démarrer l'application lorsque le conteneur est lancé
CMD ["npm", "start"]