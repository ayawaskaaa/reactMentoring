import React from "react";
import Categories from "./Categories";
import SortPanel from "./SortPanel";
import {usePanelStyles} from "./panelStyles";

function FilterBar() {
    const panelClasses = usePanelStyles();

    function retrieveCategories() {
        return ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]
    }

    return (
        <div className={panelClasses.filterBar}>
            <Categories categories={retrieveCategories()}/>
            <SortPanel onSortOptionChange={() => {
            }}/>
        </div>
    );
}

export default FilterBar;