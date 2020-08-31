import React from "react";
import {usePanelStyles} from "./panelStyles";

interface CategoryProps {
    categoryName: string
    isActive: boolean,
    handleOnClick(name: string),

}

function Category(props: CategoryProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <button className={`${panelClasses.category} ${props.isActive? panelClasses.activeCategory: ''}`}
                    onClick={() =>{props.handleOnClick(props.categoryName)}}
            >{props.categoryName}</button>
        </>
    );
}

export default Category;