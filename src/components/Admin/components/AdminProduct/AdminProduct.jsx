import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { paginationProduct } from "../../../../store/products/productActionAdmin";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state?.allProduct?.currentPage);
  const  products  = useSelector(
    (state) => state.allProduct && state.allProduct.product
  ) ?? {};

  const allProducts = useSelector((state) => state.allProduct);
  const productsList = allProducts ? allProducts.products : undefined;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(paginationProduct(currentPage))
      .then(() => setLoading(false))
    .catch(() => setLoading(false))
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
      )
       : (
        "Loading"
      )
      }
    </div>
  );
};

export default AdminProduct;
