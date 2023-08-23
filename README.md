# MédiLabo Solutions

![Logo.jpeg](.readme%2FLogo.jpeg)

## Description
MédiLabo Solutions est une application web microservices qui permet aux praticiens de gérer leurs patients, les notes de leur rendez-vous et de déterminer leur risque de diabète.

## Installation
Ces instructions vous permettront d'obtenir une copie du projet sur votre machine locale à des fins de développement et de test.
### Prérequis
* Installer <a target="_blank" href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html">Java
  17+</a>
* Installer <a target="_blank" href="https://docs.docker.com/get-docker/">Docker</a>
  et <a target="_blank" href="https://docs.docker.com/compose/install/">Docker Compose</a>

### Démarrage
```bash
docker-compose up --build -d
```

Lancement du frontend :
```bash
cd medilabo-frontend
npm install
npm run dev
```

### Credentials
* Compte praticien : 
  * Email : `test@test.com`
  * Mot de passe : `test`