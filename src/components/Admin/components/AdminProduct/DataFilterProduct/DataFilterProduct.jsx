import React from "react";
import AllTypeProduct from "./AllTypeProduct";
import CreateInforFilter from "./CreateInforFilter";
import CreateNewType from "./CreateNewType";
import FilterMenu from "./FilterMenu";
import "./DataFilterProduct.css"

const DataFilterProduct = () => {
    return (
        <div className="update-filter">
            <div className="update-filter-title">
                <span>Update detail product</span>
            </div>
            <FilterMenu></FilterMenu>
            <CreateInforFilter></CreateInforFilter>
            <AllTypeProduct></AllTypeProduct>
            <CreateNewType></CreateNewType>
        </div>
    );
}

export default DataFilterProduct;