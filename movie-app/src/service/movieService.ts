import axios from './axiosClient'
import {
    createAddMovieAction,
    createDeleteMovieAction,
    createEditMovieAction,
    createFetchMoviesAction
} from "../redux/actions";
import {MovieInfo} from "../components/main";


export const fetchMovies = () => {
    return (dispatch) => {
        axios
            .get('/movies', {headers: {'Content-Type': 'application/json'}})
            .then(response => {
                dispatch(createFetchMoviesAction(response.data.data));
            })
            .catch(e => {
                console.error(e);
                dispatch(createFetchMoviesAction([]));
            })
    }
}

export const addMovie = (movie: MovieInfo) => {
    return (dispatch) => {
        axios
            .post('/movies', prepareRequest(movie), {headers: {'Content-Type': 'application/json'}})
            .then(response => {
                dispatch(createAddMovieAction(response.data));

            })
            .catch(e => {
                console.error(e);
            })
    }
}

export const editMovie = (movie: MovieInfo) => {
    return (dispatch) => {
        axios
            .put('/movies', prepareRequest(movie), {headers: {'Content-Type': 'application/json'}})
            .then(response => {
                dispatch(createEditMovieAction(response.data));
            })
            .catch(e => {
                console.error(e);
            })
    }
}

export const deleteMovie = (id: string) => {
    return (dispatch) => {
        axios
            .delete(`/movies/${id}`)
            .then(response => {
                dispatch(createDeleteMovieAction(id));
            })
            .catch(e => {
                console.error(e);
            })
    }
}

function prepareRequest(movie: MovieInfo) {
    return {
        ...movie,
        tagline: movie.tagline || 'none',
        release_date: movie.release_date || '2016-12-29',
        overview: movie.overview || 'none',
        runtime: movie.runtime || "none",
        year: movie.year || '2000',
        poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jp',
        duration: '111',
        vote_average: '1.1',
        vote_count: '123123',
        budget: '23423',
        revenue: '123412',
        genres: ['comedy']
    }
}