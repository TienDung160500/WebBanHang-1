import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  unstable_HistoryRouter,
  useFormAction,
  useParams,
} from "react-router-dom";
import {
  getProductById,
  removeProductById,
  saveProduct,
} from "../../../../../store/products/productActionAdmin";
import { getAllSelectList } from "../../../../../store/SelectList/SelectListAction";

const AdminUpdate = () => {
  const { register, handleSubmit } = useFormAction();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = unstable_HistoryRouter();

  const [image, setImage] = useState("");
  const detailProduct = useSelector((state) => state.getProductById.product);
  const SelectList = useSelector((state) => state.selectList.List);
  const [activeTypeProduct, setActiveTypeProduct] = useState(undefined);
  const { List } = useSelector((state) => state.allTypeProduct);

  useEffect(() => {
    dispatch(getProductById(id));

    return () => {
      dispatch(removeProductById());
    };
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, []);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, []);

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    let formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append(
      "type",
      activeTypeProduct ? activeTypeProduct : detailProduct.type
    );
    formData.append("image", data.imgage);
    formData.append("_id", data.id);

    await dispatch(saveProduct(formData));
    history.push("/admin/product");
  };

  const MenuFirmProduct = (item) => (
    <div
      className={
        activeTypeProduct
          ? activeTypeProduct === item.name
            ? `filter-menu-firm-item active`
            : "filter-menu-firm-item"
          : detailProduct.type === item.name
          ? `filter-menu-firm-item-active`
          : "filter-menu-firm-item"
      }
      onClick={() => handleFilterProductByType(item.name)}
    >
      <img src={item.image} alt="" />
    </div>
  );

  const handleFilterProductByType = (name) => {
    setActiveTypeProduct(name);
  };

  return (
    <div className="admin-create">
      <span>Update Product</span>
      {detailProduct ? (
        <form
          className="admin-create-product"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={detailProduct.name}
          />
          <input
            {...register}
            placeholder="Price"
            type={Number}
            defaultValue={detailProduct.price}
          />
          <input
            {...register("discount")}
            placeholder="Discount"
            type={Number}
            defaultValue={detailProduct.discount}
          />

          <div className="filter-menu-firm">
            {List ? List.map((item) => MenuFirmProduct(item)) : ""}
          </div>

          {SelectList && SelectList.length > 0
            ? SelectList.map((item) => (
                <div className="select-type">
                  <select
                    {...register(`${item.property}`)}
                    defaultValue={detailProduct[`${item.property}`]}
                  >
                    {item.options.map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </select>
                </div>
              ))
            : ""}

          <input
            type="file"
            {...register("image")}
            onChange={handleFileImageChange}
          />
          <button type="submit">Update Product</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminUpdate;
