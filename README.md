# JavaScript_Inge2
Projet JavaScript avec @tombrousd (Tom Broussard), @Loriscristo (Loris Cristofaro), @rxszkin (Rayane Chouaref) et moi même (Pierre Bourdel)
Système de recommandations de films qui se base sur les caractéristiques communes entre les films (genres, keywords...)
Vous observerez 2 fichiers différents en raison de 2 manières différentes de se pencher sur le projet. 








# Pour le fichier RecupFilm :

## Recherche de films similaires

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



# Pour le fichier Recommandation_Films

Ce projet est une application Node.js qui permet de rechercher des films similaires à partir d'une base de données de films. 
L'application utilise deux bases de données appelées `tmdb_5000_movies.csv` et `tmdb_5000_credits.csv`. 

## Installation

1. Clonez le dépôt ou téléchargez les fichiers compressés du projet.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Exécutez la commande `npm install` pour installer les dépendances nécessaires.

## Utilisation

1. Placez les fichiers CSV des films (`tmdb_5000_movies.csv`) et des crédits (`tmdb_5000_credits.csv`) dans le répertoire racine du projet.
2. Exécutez le script en utilisant la commande `node nom_du_script.js`.
3. Suivez les instructions affichées dans la console pour rechercher des films similaires.

## Fonctionnalités

L'application offre les fonctionnalités suivantes :

- Recherche de films similaires : Vous pouvez entrer le nom d'un film dans la console, et l'application vous fournira une liste de films similaires en se basant sur les mots-clés, les genres et les compagnies de production en commun.

## Structure du projet

Le projet est organisé de la manière suivante :

- `script.js` : Le fichier principal contenant le script de l'application.
- `tmdb_5000_movies.csv` : La base de données des films.
- `tmdb_5000_credits.csv` : La base de données des crédits.
- `package.json` : Le fichier de configuration du projet.

N'hésitez pas à explorer le code source pour plus de détails sur son fonctionnement.

## Remarque

Veuillez noter que ce projet est encore en cours de développement et certaines fonctionnalités peuvent ne pas être complètement implémentées. 
Pour une utilisation optimale, veuillez suivre les instructions fournies par l'application dans la console.

Si vous rencontrez des problèmes ou avez des suggestions d'amélioration, n'hésitez pas à ouvrir une issue sur le dépôt GitHub.

---

Merci d'utiliser notre système de recommandation ! Si vous avez des questions supplémentaires, n'hésitez pas à les poser.

