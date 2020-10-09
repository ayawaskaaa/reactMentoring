import React from "react";
import FilterBar from "./panel/FilterBar";
import SearchResult from "./SearchResult";
import GalleryContainer from "./GalleryContainer";
import {useMainBlockStyles} from "./mainBlockStyles";
import GalleryErrorBoundary from "./GalleryErrorBoundary";
import {MovieInfo} from "./index";

interface MainContainerProps {
    editMovie(e, movie: MovieInfo)

    deleteMovie(e, id: string);

    onMovieSelect(e, movie: MovieInfo): void

    movies: MovieInfo[]
}

function MainContainer({movies, editMovie, deleteMovie, onMovieSelect}: MainContainerProps) {
    const mainBlockClasses = useMainBlockStyles();


    return (
        <div className={mainBlockClasses.mainBlock}>
            <div className={mainBlockClasses.mainBlockContainer}>
                <FilterBar/>
                <GalleryErrorBoundary>
                    <div className={mainBlockClasses.searchResultContainer}>
                        <SearchResult moviesAmount={movies.length}/>
                    </div>
                    <GalleryContainer
                        onMovieSelect={onMovieSelect}
                        movies={movies}
                        editMovie={editMovie}
                        deleteMovie={deleteMovie}
                    />
                </GalleryErrorBoundary>

            </div>

        </div>
    );
}

export default MainContainer;