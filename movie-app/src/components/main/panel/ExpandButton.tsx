import React from "react";
import {usePanelStyles} from "./panelStyles";

interface ExpandButtonProps {
    onExpandButtonClick();
}

function ExpandButton(props: ExpandButtonProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <button className={panelClasses.expandButton}/>
        </>
    );
}

export default ExpandButton;