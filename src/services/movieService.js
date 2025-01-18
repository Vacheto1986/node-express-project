import movies from "../movies.js";

// export default function getMovie(movieId) {
//     const result = movies.find(movie => movie.id === movieId);

//     return result;
// }

export default {
    findMovie(movieId) {

        const result = movies.find(movie => movie.id === movieId);

        return result;
    }
}