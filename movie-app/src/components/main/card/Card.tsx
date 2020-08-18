import React from "react";
import CardMenu from "./CardMenu";
import CardDetails from "./CardDetails";

interface CardProps {
    movieTitle: string;
    description: string;
    year: number;
    backgroundImage: any;
}

function Card(props: CardProps) {
    return (
        <>
            <CardMenu onCardMenuClick={() => {
            }}/>
            <CardDetails {...props}/>
        </>
    );
}

export default Card;