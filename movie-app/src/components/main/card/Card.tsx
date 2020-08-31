import React, {useState} from "react";
import CardMenu from "./CardMenu";
import CardDetails from "./CardDetails";
import {cardStyles} from "./cardStyles";

interface CardProps {
    movieTitle: string;
    description: string;
    year: number;
    backgroundImage: any;
}

function Card(props: CardProps) {
    const cardClasses = cardStyles();
    let [menuActive, setMenuActive] = useState(false)

    return (
        <div className={cardClasses.cardContainer}
             onMouseEnter={handleMouseHover}
             onMouseLeave={handleMouseHover}
        >
            <CardMenu isActive={menuActive} onCardMenuClick={() => {
            }}/>
            <CardDetails {...props}/>
        </div>
    );

    function handleMouseHover() {
        setMenuActive(!menuActive);
    }
}

export default Card;