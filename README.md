# JavaScript_Inge2
Projet JavaScript avec @tombrousd (Tom Broussard), @Loriscristo (Loris Cristofaro), @rxszkin (Rayane Chouaref) et moi même (Pierre Bourdel)
Système de recommandations de films qui se base sur les caractéristiques communes entre les films (genres, keywords...)
Vous observerez 2 fichiers différents en raison de 2 manières différentes de se pencher sur le projet. 








###### Pour le fichier RecupFilm :

# Recherche de films similaires

Ce projet est une application Node.js qui permet de rechercher des films similaires à partir d'une base de données de films. L'application utilise le framework Express pour créer un serveur et fournit une API pour effectuer des recherches. Malheureusement nous ne sommes pas venu à bout de la réalisation du site. Le code fonctionne mais son application sur le site avec le code html ne fonctionne pas. Vueillez donc lancez le code "RecupFilm.js" indépendament du code html pour un meilleur aperçu. 

## Installation

1. Clonez le dépôt ou téléchargez les fichiers du projet.
2. Assurez-vous que vous avez Node.js installé sur votre machine.
3. Exécutez la commande `npm install` pour installer les dépendances.

## Utilisation

1. Placez les fichiers CSV des films (`tmdb_5000_movies.csv`) et des crédits (`tmdb_5000_credits.csv`) dans le répertoire racine du projet.
2. Exécutez la commande `node index.js` pour démarrer le serveur.
3. Accédez à l'URL `http://localhost:3000` dans votre navigateur ou utilisez un client API pour interagir avec les endpoints.

## POST /search

Recherche les films similaires à partir du nom d'un film donné.

- Paramètres :
  - `filmName` : Le nom du film à rechercher.
  - `numFilms` : Le nombre de films similaires à retourner.

