# Projet

Créer un site avec ReactJS, ExpressJS et MongoDB pour la base de données.
Le site doit avoir une Navbar responsive pour naviguer entre les page.
Et un footer a la fin de chaques pages

Le site aura une page d'acceuil qui affichera tous les articles des utilisateurs.

Un utilisteur peut s'authentifier (Inscription puis connexion), et de manière persistante en utilisant les JWT token. Dans la base de données un utilisateur consiste:

- id, password, email, username, avatar

Le site aura une page de profil pour chaque utilisateur, ou:

- Les données de l'utilisateur seront affichées.
- L'utilisateur peut modifier ses informations.
- Afficher tous les articles de l'utilisateur.

L'utilisateur peut créer des articles, un article consiste en:

- id, title, content, image.

# 1- INITIALISATION DU PROJET

# 1-1 Initilisation de la partie front-end ReactJS

- initiliser le projet avec le commande `npx create-react-app my-app` // my-app => le nom du projet
- après l'initilisation aller vers le projet avec le commande `cd my-app`
- pour débouger le projet avec le commande `npm start`
- ajouter "type": "module",
- ajouter "start": "node index.js",
  "dev": "nodemon index.js"
  dans le script

# 1-2 Initilisation de la partie Backend Expressjs et mongoDB

- initiliser le projet avec le commande `npm init`
- pour redémarre automatiquement le processus ma application installer le nodemon `npm istall nodemon`.
- pour le mode du developement installer le commande `npm install nodemon --save-dev`
- installer expressjs avec le commande `npm install express`
- installer la BDD mongoDB avec le commande `npm install mongoose`
- installer le library bcrybt pour hasher le mot de passe avec le commande `npm install bcrypt`

# 2- Création une Navbar responsive pour naviguer entre les page.

- Pour crée une navbar il faut installr le commande dans mon projet `npm install react-router-dom`,
- Crée les composants représentant les pages je peux mettre dans le fichier App.jsx

# 3- AUTHENTIFICATION

# 3-1 Du côté serveur

- Authentification JWT avec token d'actualisation
- Projet de structure simple
- Mot de passe généré hasher
- Erreur de gestionnaire et journalisation

# 3-3 formulaire de l'inscription

- formulaire de l'inscription qui presente les schema
  {
  id, password, email, username
  }
- création des fonctionalité pour s'inscrire un utilisateur
- création des fonctionalité pour géré les erreurs

# 3-4 formulaire de la connexion

- formulaire de la connexion qui presente les schema
  {
  password, email,
  }

- création des fonctionalité pour se connecter un utilisateur
- création des fonctionalité pour géré les erreurs
- on presiser metrre le token dans localStorage

# 4 AJouter recupérer les articles

- création les fonctionalits récupérer les informations de backend
- création les fonctionalits envoyer les informations vers le frontend
- Afficher les informations à la page d'accueil

# 4- Page d'acceuil

- déclaration les schema presente à la BDD
  {
  id: Number,
  title: String,
  content: String,
  image: String
  }

- crée les fonctionalits pour ajouter les schemas à la BD
- crée les fonctionalits pour modifier les schemas à la BD
- crée les fonctionalits pour supprimer les schemas à la BD

# 5- FOOTER

- création un footer qui present dans tous la page
