import Movie from "../models/Movie.js";
import movies from "../movies.js";
import { v4 as uuid } from 'uuid';

export default {

    getAll(filter = {}) {
        let result = Movie.find({});

        // if(filter.search) {
        //     result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
        // };
        // if(filter.genre) {
        //     result = result.filter(movie => movie.genre.toLowerCase().includes(filter.genre));
        // };
        // if (filter.year){
        //     result = result.filter(movie => movie.year === filter.year);
        // }
        return result;
    },

    getOneMovie(movieId) {

        const result = Movie.findById(movieId);

        return result;
    },

    create(movieData) {
        const newId = uuid();

        movies.push({
            id: newId,
            ...movieData
        });

        return newId;
    }
}