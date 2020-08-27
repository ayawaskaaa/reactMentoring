import React from "react";
import Categories from "./Categories";
import SortPanel from "./SortPanel";
import {useMainBlockStyles} from "./mainBlockStyles";

function FilterBar() {
    const mainBlockClasses = useMainBlockStyles();

    function retrieveCategories() {
        return ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]
    }

    return (
        <div className={mainBlockClasses.filterBar}>
            <Categories categories={retrieveCategories()}/>
            <SortPanel onSortOptionChange={() => {
            }}/>
        </div>
    );
}

export default FilterBar;