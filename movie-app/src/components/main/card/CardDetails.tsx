import React from "react";
import {cardStyles} from "./cardStyles";
import PropTypes from "prop-types";

interface CardDetailsProps {
    title: string;
    tagline: string;
    release_date: string;
}

function CardDetails({release_date, tagline, title}: CardDetailsProps) {
    const cardClasses = cardStyles();
    const year = new Date(release_date).getFullYear();
    return (
        <>
            <div className={cardClasses.cardDetailsContainer}>
                <div className={cardClasses.cardDetailsContent}>
                    <span>{title}</span>
                    <span className={cardClasses.movieDescription}>{tagline}</span>
                </div>
                <div className={cardClasses.movieYearContainer}>{year}</div>
            </div>
        </>
    );
}

CardDetails.propTypes = {
    movieTitle: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
};
CardDetails.defaultProps = {
    title: '',
    tagline: '',
    release_date: ''
}
export default CardDetails;