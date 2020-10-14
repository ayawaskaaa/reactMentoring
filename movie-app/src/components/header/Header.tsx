import React from 'react';
import TopBar from "./TopBar";
import {useHeaderStyles} from "./headerStyles";
import SearchMovieContainer from "./SearchMovieContainer";
import {MovieInfo} from "../main";
import AddMovieModal from "../modal/AddMovieModal";
import {MovieDetails} from "../movie/MovieDetails";

interface HeaderProps {
    onAddMovie(movie)

    activeMovie: MovieInfo | null

    onSearchClick(e);
}

function Header({activeMovie, onAddMovie, onSearchClick}: HeaderProps) {
    const [addMovieModalShow, setAddMovieModalShow] = React.useState(false);

    function handleClose(e) {
        e.preventDefault();
        setAddMovieModalShow(false)
    }

    const headerClasses = useHeaderStyles();
    if (activeMovie) {
        return <MovieDetails movie={activeMovie} onSearchClick={onSearchClick}/>
    } else return (
        <div className={headerClasses.header}>
            <TopBar onAddButtonClick={
                (e) => {
                    e.preventDefault()
                    setAddMovieModalShow(true);
                }}/>
            <SearchMovieContainer/>
            <AddMovieModal addMovie={onAddMovie} show={addMovieModalShow} onModalClose={handleClose}/>
        </div>

    );
}

export default Header;
