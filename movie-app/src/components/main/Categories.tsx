import React from "react";
import Category from "./Category";

interface CategoriesProps {
    categories: any
}

function Categories(props: CategoriesProps) {
    return (
        <>
            ${props.categories.map(categoryName => (<Category categoryName={categoryName}/>))}
        </>
    );
}

export default Categories;