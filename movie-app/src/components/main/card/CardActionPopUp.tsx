import React, {RefObject, useEffect, useRef} from "react";

import {cardStyles} from "./cardStyles";
import CloseButton from "../../common/CloseButton";
import PropTypes from "prop-types";

interface CardActionPopUpProps {
    onClose(e);

    onEditClick(e);

    onDeleteClick(e)
}

function CardActionPopUp(props: CardActionPopUpProps) {

    const cardClasses = cardStyles();
    let selfRef: RefObject<any> = useRef();
    const handleClick = e => {
        if (selfRef?.current?.contains(e.target)) {
            return;
        }
        props.onClose(e);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return (
        <div ref={selfRef} className={cardClasses.cardActionPopUpContainer}>
            <div className={cardClasses.closeButtonContainer}>
                <CloseButton onClose={(event => props.onClose(event))} size={'20px'}/>
            </div>
            <button onClick={props.onEditClick} className={cardClasses.popUpButton}>Edit</button>
            <button onClick={props.onDeleteClick} className={cardClasses.popUpButton}>Delete</button>
        </div>
    );

}

CardActionPopUp.propTypes = {
    onClose: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};
export default CardActionPopUp;