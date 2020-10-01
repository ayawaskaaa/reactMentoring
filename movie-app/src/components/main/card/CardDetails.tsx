import React from "react";
import {cardStyles} from "./cardStyles";
import PropTypes from "prop-types";

interface CardDetailsProps {
    title: string;
    description: string;
    year: number;
}

function CardDetails({year, description, title}: CardDetailsProps) {
    const cardClasses = cardStyles();

    return (
        <>
            <div className={cardClasses.cardDetailsContainer}>
                <div className={cardClasses.cardDetailsContent}>
                    <span>{title}</span>
                    <span className={cardClasses.movieDescription}>{description}</span>
                </div>
                <div className={cardClasses.movieYearContainer}>{year}</div>
            </div>
        </>
    );
}

CardDetails.propTypes = {
    movieTitle: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.number,
};
CardDetails.defaultProps = {
    title: '',
    description: '',
    year: ''
}
export default CardDetails;