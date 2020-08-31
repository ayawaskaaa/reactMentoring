import React from "react";
import FilterBar from "./panel/FilterBar";
import SearchResult from "./SearchResult";
import GalleryContainer from "./GalleryContainer";
import {useMainBlockStyles} from "./mainBlockStyles";
import GalleryErrorBoundary from "./GalleryErrorBoundary";
import {MovieInfo} from "./index";


function MainContainer() {
    const mainBlockClasses = useMainBlockStyles();

    function retrieveMovies(): MovieInfo[] {
        return [{
            id: '1',
            movieTitle: 'Pulp Fiction',
            description: "Action and Adventure",
            year: 2004,
            backgroundImage: ''
        },
            {
                id: '2',
                movieTitle: 'Pulp Fiction',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            },
            {
                id: '3',
                movieTitle: 'Pulp Fiction',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            },
            {
                id: '4',
                movieTitle: 'Pulp Fiction',
                description: "Action and Adventure",
                year: 2004,
                backgroundImage: ''
            }];
    }

    const movies = retrieveMovies();
    return (
        <div className={mainBlockClasses.mainBlock}>
            <div className={mainBlockClasses.mainBlockContainer}>
                <FilterBar/>
                <GalleryErrorBoundary>
                    <div className={mainBlockClasses.searchResultContainer}>
                        <SearchResult moviesAmount={movies.length}/>
                    </div>
                    <GalleryContainer movies={movies}/>
                </GalleryErrorBoundary>

            </div>

        </div>
    );
}

export default MainContainer;