import React from "react";
import Categories from "./Categories";
import SortPanel from "./SortPanel";

function FilterBar() {
    function retrieveCategories() {
        return ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]
    }

    return (
        <>
            <Categories categories={retrieveCategories()}/>
            <SortPanel onSortOptionChange={() => {
            }}/>
        </>
    );
}

export default FilterBar;