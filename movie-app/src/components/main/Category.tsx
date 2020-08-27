import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";

interface CategoryProps {
    categoryName: string
}

function Category(props: CategoryProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <button className={mainBlockClasses.category}>{props.categoryName}</button>
        </>
    );
}

export default Category;