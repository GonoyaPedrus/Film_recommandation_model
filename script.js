const fs = require('fs');
const csv = require('csv-parser');
const R = require('ramda');

// Variables pour stocker les films et les crédits
const films = [];
const credits = {};

// Fonction pour trouver les films similaires
function trouverFilmsSimilaires(nomFilm, films, credits) {
    // Recherche du film dans la base de données
    const filmRecherche = films.find(film => film.original_title.toLowerCase() === nomFilm.toLowerCase());

    if (!filmRecherche) {
        console.log("Erreur : Film non trouvé dans la base de données.");
        return;
    }

    // Récupérer les crédits du film recherché
    const creditsFilmRecherche = credits[filmRecherche.id];

    // Fonction pour calculer le nombre de mots-clés en commun entre deux films et retourner les mots-clés communs
    const trouverMotsClesCommuns = (film1, film2) => {
        const motsClesFilm1 = R.map(R.toLower, R.pluck('name', film1.keywords));
        const motsClesFilm2 = R.map(R.toLower, R.pluck('name', film2.keywords));

        return R.intersection(motsClesFilm1, motsClesFilm2);
    };

    // Fonction pour trouver les genres en commun entre deux films et retourner les genres communs
    const trouverGenresCommuns = (film1, film2) => {
        const genresFilm1 = R.map(R.toLower, R.pluck('name', film1.genres));
        const genresFilm2 = R.map(R.toLower, R.pluck('name', film2.genres));

        return R.intersection(genresFilm1, genresFilm2);
    };

    // Fonction pour trouver les compagnies de production en commun entre deux films et retourner les compagnies communes
    const trouverCompagniesCommunes = (film1, film2) => {
        const compagniesFilm1 = R.map(R.toLower, R.pluck('name', film1.production_companies));
        const compagniesFilm2 = R.map(R.toLower, R.pluck('name', film2.production_companies));

        return R.intersection(compagniesFilm1, compagniesFilm2);
    };

    console.log("Informations du film d'entrée :");
    console.log("Titre :", filmRecherche.original_title);
    console.log("Genres :", R.pluck('name', filmRecherche.genres).join(", "));
    console.log("Mots-clés :", R.pluck('name', filmRecherche.keywords).join(", "));
    console.log("Compagnies de production :", R.pluck('name', filmRecherche.production_companies).join(", "));
    console.log("Crédits :");
    console.log(" - Cast :", R.take(3, R.pluck('name', creditsFilmRecherche.cast)).join(", "));
    console.log(" - Director :", trouverRealisateur(creditsFilmRecherche.cast));
    console.log("--------------------------------------");

    // Filtrer les films similaires en fonction du nombre de mots-clés en commun, des genres en commun et des compagnies de production en commun
    const filmsSimilaires = R.filter(film =>
            film !== filmRecherche &&
            trouverMotsClesCommuns(filmRecherche, film).length > 0 &&
            trouverGenresCommuns(filmRecherche, film).length > 0 &&
            trouverCompagniesCommunes(filmRecherche, film).length > 0,
        films
    );

    // Trier les films similaires par nombre de mots-clés en commun (du plus élevé au moins élevé)
    const comparerMotsClesCommuns = (film1, film2) =>
        trouverMotsClesCommuns(filmRecherche, film2).length - trouverMotsClesCommuns(filmRecherche, film1).length;
    const filmsLesPlusSimilaires = R.take(3, R.sort(comparerMotsClesCommuns, filmsSimilaires));

    console.log("Films similaires :");
    for (const film of filmsLesPlusSimilaires) {
        const creditsFilm = credits[film.id];
        console.log("Titre :", film.original_title);
        console.log("Genres en commun :", trouverGenresCommuns(filmRecherche, film).join(", "));
        console.log("Mots-clés en commun :", trouverMotsClesCommuns(filmRecherche, film).join(", "));
        console.log("Compagnies de production en commun :", trouverCompagniesCommunes(filmRecherche, film).join(", "));
        console.log("Crédits :");
        console.log(" - Cast :", R.take(3, R.pluck('name', creditsFilm.cast)).join(", "));
        console.log(" - Director :", trouverRealisateur(creditsFilm.cast));
        console.log("--------------------------------------");
    }
}

// Fonction pour trouver le réalisateur dans les crédits du film
function trouverRealisateur(crew) {
    const realisateur = crew.find(member => member.job === "Director");
    return realisateur ? realisateur.name : "None";
}


// Lecture du fichier CSV des films
fs.createReadStream('tmdb_5000_movies.csv')
    .pipe(csv())
    .on('data', (row) => {
        // Traitement des données de chaque ligne
        // Conversion des colonnes "keywords" et "production_companies" en tableaux d'objets
        row.keywords = JSON.parse(row.keywords);
        row.production_companies = JSON.parse(row.production_companies);
        row.genres = JSON.parse(row.genres);
        films.push(row);
    })
    .on('end', () => {
        // Lecture du fichier CSV des crédits
        fs.createReadStream('tmdb_5000_credits.csv')
            .pipe(csv())
            .on('data', (row) => {
                // Traitement des données de chaque ligne
                // Ajouter les crédits au film correspondant
                const filmId = parseInt(row.movie_id);
                const credit = {
                    cast: JSON.parse(row.cast),
                    crew: { Director: row.crew }
                };
                credits[filmId] = credit;
            })
            .on('end', () => {
                // Boucle pour demander le nom du film à l'utilisateur et trouver les films similaires
                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                const demanderNomFilm = () => {
                    readline.question("Entrez le nom d'un film (ou 'q' pour quitter) : ", (nomFilm) => {
                        if (nomFilm.toLowerCase() === 'q') {
                            readline.close();
                        } else {
                            trouverFilmsSimilaires(nomFilm, films, credits);
                            demanderNomFilm();
                        }
                    });
                };

                demanderNomFilm();
            });
    });