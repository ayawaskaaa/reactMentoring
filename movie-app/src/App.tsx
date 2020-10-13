import React, {useCallback, useEffect, useState} from 'react';
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Footer from "./components/footer/Footer";
import {usePageStyles} from "./components/applicationStyles";
import {MovieInfo} from "./components/main";
import {useDispatch, useSelector} from 'react-redux'
import {addMovie, deleteMovie, editMovie, fetchMovies} from "./service/movieService"


function App() {
    const classes = usePageStyles();
    let [activeMovie, setActiveMovie] = useState<MovieInfo | null>(null);
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies);
    useEffect(() => {
        dispatch(fetchMovies());
    }, [])
    const onDeleteMovie = useCallback((e, id: string) => {
        e.preventDefault()
        dispatch(deleteMovie(id));
    }, [movies])
    const onAddMovie = useCallback((e, movie) => {
        e.preventDefault()
        dispatch(addMovie(movie));
    }, [movies])
    const onEditMovie = useCallback((e, editedMovie) => {
        e.preventDefault()
        dispatch(editMovie(editedMovie));
    }, [movies])

    function onMovieSelectHandler(e, movie: MovieInfo) {
        e.preventDefault()
        setActiveMovie(movie)
    }

    function handleOnSearchClick(e) {
        e.preventDefault()
        setActiveMovie(null)
    }

    return (
        <div className={classes.pageContainer}>
            <div>
                <Header activeMovie={activeMovie} onAddMovie={onAddMovie} onSearchClick={handleOnSearchClick}/>
                <MainContainer
                    onMovieSelect={onMovieSelectHandler}
                    movies={movies}
                    deleteMovie={onDeleteMovie}
                    editMovie={onEditMovie}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
