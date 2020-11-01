import {rootReducer} from "../rootReducer";
import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_MOVIES} from "../types";

describe('test root reducer', () => {
    const movies = [
        {id: 1},
        {id: 2}
    ]
    const movie = {id: 3}
    it('should return correct state for fetch action', function () {
        const result = rootReducer(null, {
            type: FETCH_MOVIES,
            payload: {movies: movies},
        })
        expect(result.movies).toStrictEqual(movies);
    });
    it('should return correct state for add action', function () {
        const result = rootReducer({movies: movies}, {
            type: ADD_MOVIE,
            payload: {
                movie: {id: 3}
            },
        })
        expect(result.movies[2]).toStrictEqual(movie)
    });
    it('should return correct state for delete action', function () {
        const result = rootReducer({movies: movies}, {
            type: DELETE_MOVIE,
            payload: {
                id: 2
            },
        })
        expect(result.movies.length).toBe(1)
    });
    it('should return correct state for edit action', function () {
        const editedMovie = {id: 2, name: "someName"}

        const result = rootReducer({movies: movies}, {
            type: EDIT_MOVIE,
            payload: {movie: editedMovie},
        })
        expect(result.movies[1]).toStrictEqual(editedMovie)
    });
})