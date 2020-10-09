import React from "react";
import Card from "./card/Card";
import {MovieInfo} from "./index";
import {useMainBlockStyles} from "./mainBlockStyles";
import PropTypes from "prop-types";

interface GalleryContainerProps {
    editMovie(e, movie: MovieInfo)


    deleteMovie(e, id: string);

    onMovieSelect(e, movie: MovieInfo): void

    movies: MovieInfo[];
}

function GalleryContainer(props: GalleryContainerProps) {
    const mainBlockClasses = useMainBlockStyles();
    return (
        <div className={mainBlockClasses.galleryContainer}>
            {props.movies.map((movieInfo: MovieInfo) =>
                (<Card
                    onMovieSelect={props.onMovieSelect}
                    key={movieInfo.id}
                    editMovie={props.editMovie}
                    deleteMovie={props.deleteMovie}
                    movie={movieInfo}
                />)
            )}
        </div>
    );
}

GalleryContainer.propTypes = {
    movies: PropTypes.array
};

export default GalleryContainer;