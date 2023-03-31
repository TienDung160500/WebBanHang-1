import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormAction } from "react-router-dom";
import { CreateNewTypeProduct, getAllTypeProduct } from "../../../../../store/ListTypeProduct/ListTypeProductAction";

const CreateNewType = () => {
    const dispatch = useDispatch();
    const {handleSubmit, register} = useFormAction();
    const [image, setImgae] = useState("");

    const onSubmit = async (data, e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("imgae", image);

        e.target.reset();
        await dispatch(CreateNewTypeProduct(formData));
        dispatch(getAllTypeProduct());
    };

    const handleChangeImgage = (e) => {
        setImgae(e.target.files[0]);
    };

    return (
        <div className="create-type">
            <span>Create new type product</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register("name")}
                placeholder="Name" />

                <input
                type={File}
                onChange={(e) => handleChangeImgage(e)} />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateNewType;