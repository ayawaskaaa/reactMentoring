import React from "react";
import {cardStyles} from "./cardStyles";

function Dot() {
    const cardClasses = cardStyles();

    return (
        <div className={cardClasses.menuDot}/>
    );
}

export default Dot;