import React, {useState} from "react";
import CardMenu from "./CardMenu";
import CardDetails from "./CardDetails";
import {cardStyles} from "./cardStyles";
import PropTypes from "prop-types";

interface CardProps {
    movieTitle: string;
    description: string;
    year: number;
    backgroundImage: string;
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

Card.propTypes = {
    movieTitle: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.number,
    backgroundImage: PropTypes.string
};
export default Card;