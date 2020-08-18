import React from "react";
import Categories from "./Categories";
import SortPanel from "./SortPanel";

function FilterBar() {
    function retrieveCategories() {

    }

    return (
        <>
            <Categories categories={retrieveCategories()}/>
            <SortPanel sortOptions={[]} onSortOptionChange={()=>{}}/>
        </>
    );
}

export default FilterBar;