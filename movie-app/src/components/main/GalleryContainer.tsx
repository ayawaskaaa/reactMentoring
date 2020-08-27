import React from "react";
import Card from "./card/Card";
import {MovieInfo} from "./index";

interface GalleryContainerProps {
    movies: MovieInfo[];
}

function GalleryContainer(props: GalleryContainerProps) {
    return (
        <>
            {props.movies.map((movieInfo: MovieInfo) =>
                (<Card {...movieInfo}/>)
            )}
        </>
    );
}

export default GalleryContainer;