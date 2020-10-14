import React, {useState} from "react";
import {useMovieStyles} from "./movieStyles";
import buttonStyles from "../common/buttonStyles";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "../common/Button";
import CloseButton from "../common/CloseButton";
import {MovieInfo} from "../main";
import {useFormik} from "formik";

interface MovieFormProps {
    movie: MovieInfo
    formName: string

    onClose(e);

    onSubmit(movie);
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
    const validate = values => {
        const errors = {
            title: '',
            release_date: '',
            poster_path: '',
            overview: '',
            runtime: ''
        };
        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length > 20) {
            errors.title = 'Must be 15 characters or less';
        } else if (values.title.length < 3) {
            errors.title = 'Must be 3 characters or more';
        } else if (!values.release_date) {
            errors.release_date = 'Required';
        } else if (!values.poster_path) {
            errors.poster_path = 'Required';
        } else if (!values.overview) {
            errors.overview = 'Required';
        } else if (!values.runtime) {
            errors.overview = 'Required';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            id: movieState.id || '',
            title: movieState.title,
            release_date: movieState.release_date,
            poster_path: movieState.poster_path,
            overview: movieState.overview,
            runtime: movieState.runtime,
        },
        validate,
        onSubmit: values => {
            console.log(values)
            onSubmit({...values});
        },
    });
    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit} className={classes.formContainer}>
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
                            <Input type={'text'} formik={formik} name={'id'}
                                   placeHolder={''} inputTitle={InputConstants.MOVIE_ID}
                                   errorMessage={''}
                            />) : ''}
                    <Input type={'text'} formik={formik} name={'title'}
                           inputTitle={InputConstants.TITLE} placeHolder={InputConstants.TITLE_DEFAULT}
                           errorMessage={formik.errors.title}
                    />
                    <Input type={'text'} formik={formik} name={'release_date'}
                           inputTitle={InputConstants.RELEASE_DATE}
                           placeHolder={InputConstants.RELEASE_DATE_DEFAULT}
                           errorMessage={formik.errors.release_date}

                    />
                    <Input type={'text'} formik={formik} name={'poster_path'}
                           inputTitle={InputConstants.MOVIE_URL} placeHolder={InputConstants.MOVIE_URL_DEFAULT}
                           errorMessage={formik.errors.poster_path}


                    />
                    <Input type={'text'} formik={formik} name={'genre'}
                           inputTitle={InputConstants.GENRE} placeHolder={InputConstants.GENRE_DEFAULT}
                           errorMessage={''}

                    />
                    <Input type={'text'} formik={formik} name={'overview'}
                           inputTitle={InputConstants.OVERVIEW} placeHolder={InputConstants.OVERVIEW_DEFAULT}
                           errorMessage={formik.errors.overview}

                    />
                    <Input type={'text'} formik={formik} name={'runtime'}
                           inputTitle={InputConstants.RUNTIME} placeHolder={InputConstants.RUNTIME_DEFAULT}
                           errorMessage={formik.errors.runtime}
                    />
                </div>
                <div className={classes.formFooter}>
                    <div className={classes.buttonContainer}>
                        <Button type={"reset"} text={'RESET'} classes={buttonClasses.resetButton} onClick={() => {
                        }}/>
                        <Button type={"submit"} text={'SUBMIT'} classes={buttonClasses.submitButton}
                                onClick={() => {
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