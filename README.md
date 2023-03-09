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

# Initilisation de la partie front-end ReactJS

- initiliser le projet avec le commande `npx create-react-app my-app` // my-app => le nom du projet
- après l'initilisation aller vers le projet avec le commande `cd my-app`
- pour débouger le projet avec le commande `npm start`

# Initilisation de la partie Backend Expressjs et mongoDB

- initiliser le projet avec le commande `npm init`
- pour redémarre automatiquement le processus ma application installer le nodemon `npm istall nodemon`.
- pour le mode du developement installer le commande `npm install nodemon --save-dev`
- installer expressjs avec le commande `npm install express`
- installer la BDD mongoDB avec le commande `npm install mongoose`
