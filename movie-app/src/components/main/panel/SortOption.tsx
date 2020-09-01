import React from "react";
import {usePanelStyles} from "./panelStyles";
import PropTypes from "prop-types";

interface SortOptionProps {
    sortOption: string
}

function SortOption(props: SortOptionProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <button className={panelClasses.sortOption}>{props.sortOption}</button>
        </>
    )
}

SortOption.propTypes = {
    sortOption: PropTypes.string,
};
export default SortOption;