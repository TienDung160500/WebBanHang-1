import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unstable_HistoryRouter, useFormAction } from "react-router-dom";
import { getAllTypeProduct } from "../../../../store/ListTypeProduct/ListTypeProduct";
import { editCurrentPage } from "../../../../store/products/productActionAdmin";
import { saveProduct } from "../../../../store/products/productActions";
import { getAllSelectList } from "../../../../store/SelectList/SelectListAction";

const AdminCreate = () => {
    const { register, handleSubmit } = useFormAction({ defaultValues: [] });
    const dispatch = useDispatch();
    const history = unstable_HistoryRouter();

    const [image, setImgae] = useState("");
    const [activeTypeProduct, setActiveTypeProduct] = useState("");
    const SelectList = useSelector(state => state.selectList.List);
    const { page } = useSelector((state) => state.allProduct.product);
    const { List } = useSelector((state) => state.allTypeProduct);

    useEffect(() => {
        dispatch(getAllSelectList())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllTypeProduct())
    }, [dispatch]);

    const handleChangeImgageFile = (e) => {
        setImgae(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        let formData = new FormData();

        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("discount", data.discount)
        formData.append("image", data.image)

        await dispatch(saveProduct(formData));
        await dispatch(editCurrentPage(page))
        history.push("admin/product")
    };

    const handleFilterProductByType = (name) => {
        setActiveTypeProduct(name);
    }; 

    const MenuProduct = (item) => (
        <div className={activeTypeProduct === item.name
        ? `filter-menu-item-active` 
        : "filter-menu-item"}
        onClick={() => handleFilterProductByType(item.name)}>
            <img src="{item.image}" alt="" />
        </div>
    );

    return (
        <div className="admin-create">
            <span>Create Product</span>
            <form 
            className="admin-create-product"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data">
                <input 
                {...register("name")}
                placeholder="Name Product"></input>
                <input
                {...register("amount")}
                placeholder="Amount"
                type={Number}></input>
                <input
                {...register("price")}
                placeholder="Price"
                type={Number}></input>
                <input
                {...register("discount")}
                placeholder="Discount"
                type={Number}></input>

                <div className="filter-menu">
                    {
                        List ? (List.map((item) => MenuProduct(item))) : ""
                    }
                </div>

                {SelectList && SelectList.length > 0
                    ? SelectList.map((item) => (
                        <div className="select-type">
                            <select {...register(`${item.property}`)}>
                                <option>{item.name}</option>
                                {item.option.map((x) => (
                                    <option value={x}>{x}</option>
                                ))}
                            </select>
                        </div>
                    )) 
                    : ""}

                    <input
                    type={File}
                    {...register("image")}
                    onChange={handleChangeImgageFile}></input>
                    <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default AdminCreate;