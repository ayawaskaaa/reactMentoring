import React from "react";
import {usePanelStyles} from "./panelStyles";
import PropTypes from "prop-types";

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

ExpandButton.propTypes = {
    onExpandButtonClick: PropTypes.func,
};
export default ExpandButton;