import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginationProduct } from "../../../../store/products/productActionAdmin";
import ListProduct from "./ListProduct"
import "./AdminProduct.css"

const AdminProduct = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);
    const {products} = useSelector((state) => state.allProduct.product);

    useEffect(() => {
        dispatch(paginationProduct(currentPage));
    }, [dispatch, currentPage]);

    return (
      <div className="admin-product">
        <div className="admin-product-link">
          <Link to="/admin/product/create" className="add-product">
            <AppstoreAddOutlined />
          </Link>
          <Link to="/admin/product/update/infor" className="add-product">
            <ToolOutlined />
          </Link>
        </div>

        {products ? (
          <ListProduct listProducts={products}></ListProduct>
        ) : (
          "Loading"
        )}
      </div>
    );
}

export default AdminProduct;