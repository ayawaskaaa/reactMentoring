import {MovieInfo} from "../components/main";
import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_MOVIES} from "./types";

export const createAddMovieAction = (movie: MovieInfo) => ({
    type: ADD_MOVIE,
    payload: {movie},
});

export const createEditMovieAction = (movie: MovieInfo) => ({
    type: EDIT_MOVIE,
    payload: {movie},
});

export const createDeleteMovieAction = (id: string) => ({
    type: DELETE_MOVIE,
    payload: {id},
});

export const createFetchMoviesAction = (movies: MovieInfo[]) => ({
    type: FETCH_MOVIES,
    payload: {movies},
});