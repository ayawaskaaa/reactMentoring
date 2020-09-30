import React from "react";
import {cardStyles} from "./cardStyles";
import Dot from "./Dot";
import PropTypes from "prop-types";
import CardActionPopUp from "./CardActionPopUp";
import {MovieInfo} from "../index";

interface CardMenuProps {
    isActive: boolean,
    showPopUp: boolean,

    onPopUpClose(e): void

    onDeleteClick(e): void

    onCardMenuClick(e): void

    onEditClick(e): void

    onMovieSelect(e, movie: MovieInfo): void

    movie: MovieInfo;
}

function CardMenu(props: CardMenuProps) {
    const cardClasses = cardStyles();

    return (
        <button onClick={(e) => {
            props.onMovieSelect(e, props.movie)
        }} className={cardClasses.cardImage}>
            {props.isActive ?
                (<div className={cardClasses.menuButtonContainer}>
                    <button onClick={props.onCardMenuClick}
                            className={props.isActive ? cardClasses.activeMenuButton : cardClasses.inactiveMenuButton}>
                        <Dot/>
                        <Dot/>
                        <Dot/>
                    </button>
                </div>)
                : ''}
            <div className={cardClasses.popUpContainer}>
                {props.showPopUp ? (
                    <CardActionPopUp
                        onDeleteClick={props.onDeleteClick}
                        onEditClick={props.onEditClick}
                        onClose={props.onPopUpClose}
                    />) : ''}
            </div>
        </button>
    );
}

CardMenu.propTypes = {
    isActive: PropTypes.bool,
    onCardMenuClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};
export default CardMenu;