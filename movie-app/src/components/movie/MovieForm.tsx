import React, {useState} from "react";
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

    onSubmit(e, movie);
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
    const [movieState, setMovie] = useState(movie)

    return (
        <div className={classes.root}>
            <form id={'myForm'} className={classes.formContainer}>
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
                            <Input onChange={(event) => {
                            }} placeHolder={''} inputTitle={InputConstants.MOVIE_ID} inputValue={movie.id}/>) : ''}
                    <Input inputTitle={InputConstants.TITLE} placeHolder={InputConstants.TITLE_DEFAULT}
                           inputValue={movieState.title} onChange={(event) => {
                        movieState.title = event.target.value
                        console.log('input change ', movieState.title)
                    }}/>
                    <Input inputTitle={InputConstants.RELEASE_DATE}
                           placeHolder={InputConstants.RELEASE_DATE_DEFAULT} inputValue={movieState.release_date}
                           onChange={(event) => {
                               movieState.release_date = event.target.value
                           }}/>
                    <Input inputTitle={InputConstants.MOVIE_URL} placeHolder={InputConstants.MOVIE_URL_DEFAULT}
                           inputValue={movieState.poster_path}
                           onChange={(event) => {
                               movieState.poster_path = event.target.value
                           }}/>
                    <Input inputTitle={InputConstants.GENRE} placeHolder={InputConstants.GENRE_DEFAULT}
                           inputValue={''}
                           onChange={(event) => {

                           }}/>
                    <Input inputTitle={InputConstants.OVERVIEW} placeHolder={InputConstants.OVERVIEW_DEFAULT}
                           inputValue={movieState.overview}
                           onChange={(event) => {
                               movieState.overview = event.target.value
                           }}/>
                    <Input inputTitle={InputConstants.RUNTIME} placeHolder={InputConstants.RUNTIME_DEFAULT}
                           inputValue={movieState.runtime}
                           onChange={(event) => {
                               movieState.runtime = event.target.value
                           }}/>
                </div>
                <div className={classes.formFooter}>
                    <div className={classes.buttonContainer}>
                        <Button type={"reset"} text={'RESET'} classes={buttonClasses.resetButton} onClick={(e) => {
                            setMovie({id: movieState.id});
                        }}/>
                        <Button type={"submit"} text={'SUBMIT'} classes={buttonClasses.submitButton}
                                onClick={(e) => {
                                    onSubmit(e, movie)
                                }}/>
                    </div>
                </div>
            </form>
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