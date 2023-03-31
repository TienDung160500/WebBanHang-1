import { useState } from "react";
import { useDispatch } from "react-redux"
import { useFormAction } from "react-router-dom";
import { CreateSelectListItem, getAllSelectList } from "../../../../../store/SelectList/SelectListAction";

const CreateInforFilter = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useFormAction();
    const [addOption, setAddOption] = useState([]);

    const handleAddOption = () => {
        const newOption = {
            index: Math.random(),
            value: "",
        };
        setAddOption([...addOption, newOption]);
    };

    const handleRemoveOption = () => {
        let newListOption = [...addOption];
        newListOption = newListOption.filter((item) => item.index !== Option.index);

        setAddOption(newListOption);
    };

    const handleChangeValueOption = (option, e) => {
        const newListOption = [...addOption];
        const index = newListOption.findIndex((item) => item.index === option.index);

        newListOption[index].value = e.target.value;
        setAddOption(newListOption);
    }

    const createArrayOption = (arr) => {
        let options = [];
        arr = arr.map((item) => options.push(`${item.value}`));
        return options;
    }

    const onSubmit = async (data,e) => {
        const options = createArrayOption([...addOption]);
        const newData = {...data,options};
        await dispatch(CreateSelectListItem(newData));
        setAddOption([]);
        e.target.reset();
        dispatch(getAllSelectList())
    };

    return (
        <div className="update-filter-infor">
            <span>Create select product</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register("name")}
                placeholder="Name" />
                <input
                {...register("property")}
                placeholder="Property" />
                <div className="option-list">
                    {addOption.map((option, index) => (
                        <div 
                        className="option-list-item"
                        key={index}>
                            <input
                            value={option.value}
                            placeholder="Option"
                            onChange={(e) => {handleChangeValueOption(option, e)}} />
                            <span onClick={() => {handleRemoveOption(option)}}>

                            </span>
                        </div>
                    ))}
                </div>
                <span onClick={handleAddOption}>Add Options</span>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateInforFilter;