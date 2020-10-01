import React from 'react';
import TopBar from "./TopBar";
import {useHeaderStyles} from "./headerStyles";
import SearchMovieContainer from "./SearchMovieContainer";
import AddMovieModal from "../modal/AddMovieModal";
import {MovieInfo} from "../main";

interface HeaderProps {
    onAddMovie(movie: MovieInfo)
}

function Header(props: HeaderProps) {
    const [addMovieModalShow, setAddMovieModalShow] = React.useState(false);

    function handleClose(e) {
        e.preventDefault();
        setAddMovieModalShow(false)
    }

    const headerClasses = useHeaderStyles();
    return (
        <div className={headerClasses.header}>
            <TopBar onAddButtonClick={
                (e) => {
                    e.preventDefault()
                    setAddMovieModalShow(true);
                }}/>
            <SearchMovieContainer/>
            <AddMovieModal show={addMovieModalShow} onModalClose={handleClose}/>
        </div>
    );
}

export default Header;
