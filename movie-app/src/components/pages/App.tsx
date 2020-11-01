import React, {useCallback, useEffect, useState} from 'react';
import Header from "../header/Header";
import MainContainer from "../main/MainContainer";
import Footer from "../footer/Footer";
import {usePageStyles} from "../applicationStyles";
import {MovieInfo} from "../main";
import {useDispatch, useSelector} from 'react-redux'
import {addMovie, deleteMovie, editMovie, fetchMovies} from "../../service/movieService"
import {RouteProps} from 'react-router-dom';

function App(props: RouteProps) {
    const classes = usePageStyles();
    let searchQuery = props.location?.search;
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
    const onAddMovie = useCallback((movie) => {
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
                    searchQuery={searchQuery}
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
