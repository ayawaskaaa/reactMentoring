import React, {useState} from "react";
import Category from "./Category";
import {usePanelStyles} from "./panelStyles";
import PropTypes from "prop-types";

interface CategoriesProps {
    categories: string[]
}

function Categories(props: CategoriesProps) {
    const panelClasses = usePanelStyles();
    let [activeCategoryName, setActiveCategoryName] = useState(props.categories[0])


    return (
        <div className={panelClasses.categoryContainer}>
            {props.categories.map(categoryName => (
                <Category key={categoryName}
                          handleOnClick={(name: string) => {
                              setActiveCategoryName(name)
                          }}
                          isActive={activeCategoryName === categoryName} categoryName={categoryName}/>))}
        </div>
    );
}

Categories.propTypes = {
    categories: PropTypes.array
};
export default Categories;