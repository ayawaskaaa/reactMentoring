import React from "react";

interface SortDropDownProps {
    sortOptions: any,

    onSortOptionChange(): void
}

function SortDropDown(props: SortDropDownProps) {
    return (
        <ol>
            ${props.sortOptions.map(sortOption => <li>sortOption</li>)}
        </ol>
    )
}

export default SortDropDown;