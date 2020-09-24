import React, {useState} from "react";
import CardMenu from "./CardMenu";
import CardDetails from "./CardDetails";
import {cardStyles} from "./cardStyles";
import PropTypes from "prop-types";
import {MovieInfo} from "../index";
import EditMovieModal from "../../modal/EditMovieModal";
import DeleteMovieModal from "../../modal/DeleteMovieModal";

interface CardProps {
    editMovie(movie: MovieInfo)

    deleteMovie(id: string);

    movie: MovieInfo
}

function Card({editMovie, deleteMovie, movie}: CardProps) {

    const cardClasses = cardStyles();
    let [menuActive, setMenuActive] = useState(false)
    let [showPopUp, setShowPopUp] = useState(false)
    let [showEdit, setShowEdit] = useState(false)
    let [showDelete, setShowDelete] = useState(false)

    return (
        <div className={cardClasses.cardContainer}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >

            <EditMovieModal
                movie={movie}
                show={showEdit}
                onModalClose={e => {
                    e.stopPropagation()
                    setShowEdit(false);
                }}
                onSubmit={editMovie}
            />
            <DeleteMovieModal
                show={showDelete}
                movie={movie}
                onModalClose={
                    e => {
                        e.stopPropagation()
                        setShowDelete(false);
                    }
                }
                onConfirm={deleteMovie}
            />
            <CardMenu
                onDeleteClick={e => {
                    e.stopPropagation()
                    setShowDelete(true);
                }}
                onEditClick={e => {
                    e.stopPropagation()
                    setShowEdit(true);
                }}
                showPopUp={showPopUp}
                onPopUpClose={e => {
                    e.preventDefault();
                    setShowPopUp(false);

                }} isActive={menuActive && !showPopUp} onCardMenuClick={() => {
                setShowPopUp(true);
            }}/>


            <CardDetails {...movie}/>
        </div>
    );

    function handleMouseEnter() {
        setMenuActive(true);
    }
    function handleMouseLeave() {
        setMenuActive(false);
    }
}

Card.propTypes = {
    movie: PropTypes.object
};
export default Card;