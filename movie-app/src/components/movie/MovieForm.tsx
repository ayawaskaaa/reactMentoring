import React from "react";
import {useMovieStyles} from "./movieStyles";
import buttonStyles from "../common/buttonStyles";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "../common/Button";
import CloseButton from "../common/CloseButton";
import {MovieInfo} from "../main";

interface MovieFormProps {
    movie: MovieInfo
    formName: string

    onClose(e);

    onSubmit(movie: MovieInfo);
}

enum InputConstants {
    MOVIE_ID = 'MOVIE ID',
    TITLE = 'TITLE',
    RELEASE_DATE = 'RELEASE DATE',
    MOVIE_URL = 'MOVIE URL',
    GENRE = 'GENRE',
    OVERVIEW = 'OVERVIEW',
    RUNTIME = 'RUNTIME',
    TITLE_DEFAULT = 'Title here',
    RELEASE_DATE_DEFAULT = 'Select Date',
    MOVIE_URL_DEFAULT = 'Movie URL here',
    GENRE_DEFAULT = 'Select Genre',
    OVERVIEW_DEFAULT = 'Overview here',
    RUNTIME_DEFAULT = 'Runtime here'

}

function MovieForm({movie, onClose, formName, onSubmit}: MovieFormProps) {
    const classes = useMovieStyles();
    const buttonClasses = buttonStyles();

    return (<div className={classes.root}>
            <div className={classes.formContainer}>
                <div className={classes.header}>
                    <div className={classes.closeButtonContainer}>
                        <CloseButton onClose={event => onClose(event)} size={'25px'}/>
                    </div>
                </div>
                <div className={classes.formContent}>
                    <div className={classes.formName}>
                        <span className={classes.formName}>{formName}</span>
                    </div>
                    {
                        movie.id ? (
                            <Input placeHolder={''} inputTitle={InputConstants.MOVIE_ID} inputValue={movie.id}/>) : ''}
                    <Input inputTitle={InputConstants.TITLE} placeHolder={InputConstants.TITLE_DEFAULT}
                           inputValue={movie.title}/>
                    <Input inputTitle={InputConstants.RELEASE_DATE}
                           placeHolder={InputConstants.RELEASE_DATE_DEFAULT} inputValue={movie.releaseDate}/>
                    <Input inputTitle={InputConstants.MOVIE_URL} placeHolder={InputConstants.MOVIE_URL_DEFAULT}
                           inputValue={movie.movieUrl}/>
                    <Input inputTitle={InputConstants.GENRE} placeHolder={InputConstants.GENRE_DEFAULT}
                           inputValue={movie.genre}/>
                    <Input inputTitle={InputConstants.OVERVIEW} placeHolder={InputConstants.OVERVIEW_DEFAULT}
                           inputValue={movie.overview}/>
                    <Input inputTitle={InputConstants.RUNTIME} placeHolder={InputConstants.RUNTIME_DEFAULT}
                           inputValue={movie.runtime}/>
                </div>
                <div className={classes.formFooter}>
                    <div className={classes.buttonContainer}>
                        <Button text={'RESET'} classes={buttonClasses.resetButton} onClick={(e) => {
                            e.preventDefault()
                            onSubmit(movie);
                        }}/>
                        <Button text={'SUBMIT'} classes={buttonClasses.submitButton} onClick={(e) => {
                            e.preventDefault()
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

MovieForm.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    movieUrl: PropTypes.string,
    genre: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.string,
    formName: PropTypes.string,
    onClose: PropTypes.func
};
export default MovieForm;