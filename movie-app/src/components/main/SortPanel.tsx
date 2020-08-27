import React from "react";
import SortDropDown from "./SortDropDown";
import {useMainBlockStyles} from "./mainBlockStyles";
import ExpandButton from "./ExpandButton";

interface SortPanelProps {
    onSortOptionChange(): void;
}

function SortPanel(props: SortPanelProps) {
    const SORT_OPTIONS = ["RELEASE DATE", "RATING"]
    let selectedOption = 'RELEASE DATE';
    const mainBlockClasses = useMainBlockStyles();

    function onSortOptionChange() {

    }

    return (
        <div className={mainBlockClasses.sortPanel}>
            <span className={mainBlockClasses.textStyle}>SORT BY</span>
            <SortDropDown selected={selectedOption} onSortOptionChange={onSortOptionChange} sortOptions={SORT_OPTIONS}/>
            <div className={mainBlockClasses.expandButtonContainer}>
                <ExpandButton onExpandButtonClick={() => {
                }}/>
            </div>
        </div>
    );
}

export default SortPanel;