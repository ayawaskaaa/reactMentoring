import React from "react";
import Card from "./card/Card";
import {MovieInfo} from "./index";
import {useMainBlockStyles} from "./mainBlockStyles";

interface GalleryContainerProps {
    movies: MovieInfo[];
}

function GalleryContainer(props: GalleryContainerProps) {
    const mainBlockClasses = useMainBlockStyles();
    return (
        <div className={mainBlockClasses.galleryContainer}>
            {props.movies.map((movieInfo: MovieInfo) =>
                (<Card key={movieInfo.id} {...movieInfo}/>)
            )}
        </div>
    );
}

export default GalleryContainer;