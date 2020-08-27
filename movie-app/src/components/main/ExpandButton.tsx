import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";

interface ExpandButtonProps {
    onExpandButtonClick();
}

function ExpandButton(props: ExpandButtonProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <button className={mainBlockClasses.expandButton}/>
        </>
    );
}

export default ExpandButton;