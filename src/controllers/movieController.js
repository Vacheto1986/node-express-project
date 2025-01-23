import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/search', (req, res) => {
    // console.log(req.params); Data comes from URL parameters defined in the route path
    // console.log(req.body);   Data comes from the request body.
    // console.log(req.query);  Data comes from query string parameters in the URL

    const filter = req.query;
    const movies = movieService.getAll(filter);

    res.render('search', { movies })
})

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const newMovie = req.body;
    movieService.create(newMovie);

    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneMovie(movieId);

    res.render('details', { movie });
});


export default movieController;