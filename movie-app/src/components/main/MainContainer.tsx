import React from "react";
import FilterBar from "./FilterBar";
import SearchResult from "./SearchResult";
import GalleryContainer from "./GalleryContainer";
import {useMainBlockStyles} from "./mainBlockStyles";
import GalleryErrorBoundary from "./GalleryErrorBoundary";
import {MovieInfo} from "./index";


function MainContainer() {
    const mainBlockClasses = useMainBlockStyles();

    function retrieveMovies(): MovieInfo[] {
        return [{
            movieTitle: 'Pulp Fiction',
            description: "Action and Adventure",
            year: 2004,
            backgroundImage: ''
        }];
    }

    const movies = retrieveMovies();
    return (
        <div className={mainBlockClasses.mainBlock}>
            <FilterBar/>
            <GalleryErrorBoundary>
                <SearchResult moviesAmount={movies.length}/>
            </GalleryErrorBoundary>
            <GalleryContainer movies={movies}/>
        </div>
    );
}

export default MainContainer;