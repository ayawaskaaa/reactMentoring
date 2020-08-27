import React from "react";
import Category from "./Category";
import {useMainBlockStyles} from "./mainBlockStyles";

interface CategoriesProps {
    categories: any
}

function Categories(props: CategoriesProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <div className={mainBlockClasses.categoryContainer}>
            {props.categories.map(categoryName => (<Category categoryName={categoryName}/>))}
        </div>
    );
}

export default Categories;