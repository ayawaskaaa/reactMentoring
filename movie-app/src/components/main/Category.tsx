import React from "react";
interface CategoryProps {
    categoryName: string
}
function Category(props: CategoryProps) {
    return (
        <>
            <span>${props.categoryName}</span>
        </>
    );
}

export default Category;