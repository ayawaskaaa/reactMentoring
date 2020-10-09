import React, {useCallback, useState} from 'react';
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Footer from "./components/footer/Footer";
import {usePageStyles} from "./components/applicationStyles";
import {MovieInfo} from "./components/main";


function App() {
    const classes = usePageStyles();
    let [movies, setMovies] = useState(retrieveMovies());
    let [activeMovie, setActiveMovie] = useState<MovieInfo | null>(null);
    const onDeleteMovie = useCallback((e, id: string) => {
        e.preventDefault()
        const movieId = id;
        const index = movies.findIndex((movie: MovieInfo) => {
            return movieId === movie.id
        })
        movies.splice(index);
        setMovies([...movies])
    }, [movies])
    const onAddMovie = useCallback((e) => {
        e.preventDefault()
        const movie = e.target.value;
        setMovies(
            [...movies, movie]
        )
    }, [movies])
    const onEditMovie = useCallback((e, editedMovie) => {
        e.preventDefault()
        const index = movies.findIndex((movie: MovieInfo) => {
            return editedMovie.id === movie.id
        })
        movies[index] = editedMovie;
        setMovies(
            [...movies]
        )
    }, [movies])

    function onMovieSelectHandler(e, movie: MovieInfo) {
        e.preventDefault()
        setActiveMovie(movie)
    }

    function handleOnSearchClick(e) {
        e.preventDefault()
        setActiveMovie(null)
    }

    function retrieveMovies(): MovieInfo[] {
        return [{
            id: '1',
            title: 'Pulp Fiction',
            subtitle: 'Oscar wining movie',
            releaseDate: '2004',
            movieUrl: 'urlrul',
            genre: 'comedy',
            overview: 'nice',
            runtime: 'past',
            description: "Action and Adventure",
            year: 2004,
            backgroundImage: '',
            duration: '154',
            rate: '4.5'
        },
            {
                id: '2',
                title: 'Pulp Fiction',
                releaseDate: '2004',
                movieUrl: 'urlrul',
                genre: 'comedy',
                overview: 'nice',
                runtime: 'past',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            },
            {
                id: '3',
                title: 'Pulp Fiction',
                releaseDate: '2004',
                movieUrl: 'urlrul',
                genre: 'comedy',
                overview: 'nice',
                runtime: 'past',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            },
            {
                id: '4',
                title: 'Pulp Fiction',
                releaseDate: '2004',
                movieUrl: 'urlrul',
                genre: 'comedy',
                overview: 'nice',
                runtime: 'past',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            }];
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
