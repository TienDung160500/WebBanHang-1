import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypeProduct, getAllTypeProduct } from "../../../../../store/ListTypeProduct/ListTypeProductAction";

const AllTypeProduct = () => {
    const dispatch = useDispatch();
    const { List } = useSelector((state) => state.allTypeProduct);

    useEffect(() => {
        dispatch(getAllTypeProduct());
    }, [dispatch]);

    const handleRemoveItem = async (item) => {
        await dispatch(deleteTypeProduct(item))
        dispatch(getAllTypeProduct());
    }

    const MenuFirmProduct = (firmItem) => (
        <div className="filter-menu-firm-item">
            <img src={firmItem.img} alt="" />
            <div 
            className="filter-menu-firm-item-delete"
            onClick={() => handleRemoveItem(firmItem)}>
                <span>

                </span>
            </div>
        </div>
    );

    return (
        <div>
            <div className="filter-menu-firm">
                {List ? List.map((item) => MenuFirmProduct(item)) : ""}
            </div>
        </div>
    )
}

export default AllTypeProduct;