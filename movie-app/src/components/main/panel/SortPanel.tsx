import React from "react";
import SortDropDown from "./SortDropDown";
import ExpandButton from "./ExpandButton";
import {usePanelStyles} from "./panelStyles";

interface SortPanelProps {
    onSortOptionChange(): void;
}

function SortPanel(props: SortPanelProps) {
    const SORT_OPTIONS = ["RELEASE DATE", "RATING"]
    let selectedOption = 'RELEASE DATE';
    const panelClasses = usePanelStyles();

    function onSortOptionChange() {

    }

    return (
        <div className={panelClasses.sortPanel}>
            <span className={panelClasses.textStyle}>SORT BY</span>
            <SortDropDown selected={selectedOption} onSortOptionChange={onSortOptionChange} sortOptions={SORT_OPTIONS}/>
            <div className={panelClasses.expandButtonContainer}>
                <ExpandButton onExpandButtonClick={() => {
                }}/>
            </div>
        </div>
    );
}

export default SortPanel;