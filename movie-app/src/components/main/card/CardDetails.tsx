import React from "react";
import {cardStyles} from "./cardStyles";

interface CardDetailsProps {
    movieTitle: string;
    description: string;
    year: number;
}

function CardDetails(props: CardDetailsProps) {
    const cardClasses = cardStyles();

    return (
        <>
            <div className={cardClasses.cardDetailsContainer}>
                <div className={cardClasses.cardDetailsContent}>
                    <span>{props.movieTitle}</span>
                    <span className={cardClasses.movieDescription}>{props.description}</span>
                </div>
                <div className={cardClasses.movieYearContainer}>{props.year}</div>
            </div>
        </>
    );
}

export default CardDetails;