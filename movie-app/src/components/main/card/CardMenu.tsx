import React from "react";
import {cardStyles} from "./cardStyles";
import Dot from "./Dot";

interface CardMenuProps {
    isActive: boolean,

    onCardMenuClick(): void
}

function CardMenu(props: CardMenuProps) {
    const cardClasses = cardStyles();

    return (
        <div className={cardClasses.cardImage}>
            <div className={cardClasses.menuButtonContainer}>
                <button className={props.isActive ? cardClasses.activeMenuButton : cardClasses.inactiveMenuButton}>
                    <Dot/>
                    <Dot/>
                    <Dot/>
                </button>
            </div>

        </div>
    );
}

export default CardMenu;