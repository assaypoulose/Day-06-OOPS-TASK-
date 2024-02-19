//a) Here's an example constructor for the Movie class that takes the title, studio, and rating as arguments:

class Movie {
    constructor(title, studio, rating = "PG") {
        //b) In the constructor above, we set the rating property to "PG" as the default value if no rating is provided.
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    //c) Here's an example implementation of the getPG method:
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
    // Add more Movie instances as needed
];

// Filtering movies with a rating of "PG"
const pgMoviesArray = Movie.getPG(moviesArray);

// Logging the result
console.log(pgMoviesArray);
