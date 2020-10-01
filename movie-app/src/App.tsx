import React, {useState} from 'react';
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Footer from "./components/footer/Footer";
import {usePageStyles} from "./components/applicationStyles";
import {MovieInfo} from "./components/main";


function App() {
    const classes = usePageStyles();
    let [movies, setMovies] = useState(retrieveMovies());

    function retrieveMovies(): MovieInfo[] {
        return [{
            id: '1',
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
                <Header onAddMovie={(movie) => {
                    setMovies(
                        [...movies, movie]
                    )
                }
                }/>
                <MainContainer
                    movies={movies}
                    deleteMovie={(id) => {
                    }}
                    editMovie={(movie) => {
                    }}
                />

            </div>
            <Footer/>
        </div>
    );
}

export default App;
