import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormAction } from "react-router-dom";
import { deleteSelectListItem, getAllSelectList, UpdateSelectListItem } from "../../../../../store/SelectList/SelectListAction";

const FilterMenu = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useFormAction();

    const [SelectItem, setSelectItem] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const filterMenuList = useSelector((state) => state.selectList.List);

    useEffect(() => {
        dispatch(getAllSelectList());
    }, [dispatch]);

    const showModal = (item) => {
        setSelectItem(item);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectItem(undefined);
    };

    const handleAddOption = () => {
        const newOption = "";
        setSelectItem({
            ...SelectItem,
            options: [...SelectItem.options, newOption],
        });
    };

    const handleRemoveOption = (option, index) => {
        let newSelectItem = {...SelectItem};
        const newOption = newSelectItem.option.filter(
            (item, indexItem) => indexItem !== index
        );
        setSelectItem({...SelectItem, option: newOption});
    };

    const handleChangeValueOption = (option, index, e) => {
        const content = e.target.value;
        let newSelectItem = {...SelectItem};
        newSelectItem.option[index] = content;

        setSelectItem(newSelectItem);
    };

    const onSubmit = async (data, e) => {
        await dispatchEvent(UpdateSelectListItem(SelectItem));
        handleCancel()
        dispatch(getAllSelectList())
    };

    const filterMenuItemAdd = (item) => (
        <div className="filter-menu-item">
            <div className="filter-menu-item-name">
                
                <span className="ant-dropdown-link">
                    {item.name}
                </span>
            </div>
        </div>
    );

    const removeSelectItem = async (item) => {
        await dispatch(deleteSelectListItem(item._id))
        dispatch(getAllSelectList())
    }

    const menuShow = (menuItem) => (
        <div className="menu-show">
            <div className="menu-show-list">
                {menuItem.option.map((item) => (
                    <div className="menu-show-item">{item}</div>
                ))}
            </div>

            <div className="menu-show-btn">
                <button 
                className="cancel"
                onClick={() => showModal(menuItem
                )}>
                    Update
                </button>
                <button 
                className="cancel"
                onClick={() => removeSelectItem(menuItem)}>
                    Delete
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <div className="filter-menu">
                {filterMenuList && filterMenuList.length > 0
                ? filterMenuList.map((item) => filterMenuItemAdd(item))
                : ""}
                {SelectItem ? (
                    <div
                    title={`Update ${SelectItem.name}`}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={false}>
                        <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="form-update-select">
                            <input
                            {...register("name")}
                            placeholder="Name"
                            defaultValue={SelectItem.name}/>
                            <input
                            {...register("property")}
                            placeholder="Property"
                            defaultValue={SelectItem.property}/>
                            <div className="option-list">
                                {SelectItem.option.map((option, index) => (
                                    <div className="option list item"
                                    key={index}>
                                        <input value={option}
                                        placeholder="Option"
                                        onChange={(e) => {
                                            handleChangeValueOption(option, index, e);
                                        }} />
                                        <span onClick={() => handleRemoveOption(option, index)}>

                                        </span>
                                    </div>
                                ))}
                            </div>
                            <span onClick={handleAddOption}>Add Option</span>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                ) : ("")}
            </div>
        </div>
    )
}

export default FilterMenu;