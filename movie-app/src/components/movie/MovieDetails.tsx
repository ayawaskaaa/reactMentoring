import {MovieInfo} from "../main";
import React from 'react';
import {useMovieDetailsStyles} from "./movieDetailsStyles";
import LogoText from "../common/LogoText";
import SearchButton from "../common/SearchButton";

interface MovieDetailsProps {
    movie: MovieInfo;

    onSearchClick(e);
}

export function MovieDetails({movie, onSearchClick}: MovieDetailsProps) {
    const classes = useMovieDetailsStyles();

    return (
        <div className={classes.movieDetailsContainer}>
            <div className={classes.header}>
                <div className={classes.leftHeader}>
                    <LogoText/>
                </div>
                <div className={classes.rightHeader}>
                    <SearchButton onClick={onSearchClick}/>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.cardImage}></div>
                <div className={classes.contentContainer}>
                    <div className={classes.headerContainer}>
                        <span className={classes.contentHeader}>{movie.title}</span>
                        <div className={classes.rateContainer}>
                            <span className={classes.rate}>{movie.vote_average}</span>
                        </div>
                    </div>
                    <span className={classes.contentSubHeader}>{movie.tagline}</span>
                    <div className={classes.contentMetaContainer}>
                        <span>{movie.year}</span>
                        <span>{movie.duration}{' '}min</span>
                    </div>
                    <p className={classes.overview}>
                        The title refers to the pulp magazines and hardboiled crime novels
                        popular during the mid-20th century, known for their
                        graphic violence and punchy dialogue.
                        Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating
                        scenes that Avary originally wrote for True Romance (1993)
                    </p>
                </div>
            </div>
        </div>)

}