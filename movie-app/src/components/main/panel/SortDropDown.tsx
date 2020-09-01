import React from "react";
import SortOption from "./SortOption";
import {usePanelStyles} from "./panelStyles";
import PropTypes, {string} from "prop-types";

interface SortDropDownProps {
    sortOptions: string[],
    selected: string

    onSortOptionChange(): void
}

function SortDropDown(props: SortDropDownProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <div className={panelClasses.textStyle}>{props.selected}</div>
            <div className={panelClasses.sortOptionContainerInactive}>{props.sortOptions.map(sortOption =>
                <SortOption key={sortOption} sortOption={sortOption}/>)}</div>
        </>
    )
}

SortDropDown.propTypes = {
    sortOptions: PropTypes.arrayOf(string),
    selected: PropTypes.string,
    onSortOptionChange: PropTypes.func
};
export default SortDropDown;