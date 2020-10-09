import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_MOVIES} from "./types";
import {MovieInfo} from "../components/main";

export const initialState = {
    movies: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload.movie]
            }
        case EDIT_MOVIE:
            let moviesForEdit: MovieInfo [] = state.movies.slice();
            let edited = action.payload.movie;
            const index = moviesForEdit.findIndex((mv: MovieInfo) => {
                return edited.id === mv.id
            })
            moviesForEdit[index] = edited;
            return {
                ...state,
                movies: moviesForEdit
            }
        case DELETE_MOVIE:
            let movieId = action.payload.id;
            const updated = state.movies.filter((mv: MovieInfo) => {
                return movieId !== mv.id
            })
            console.log(updated)
            return {
                ...state,
                movies: updated
            }
        default :
            return state;
    }
    return state
}