import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProduct, paginationProduct } from "../../../../store/products/productActionAdmin";
import { formatPrice } from "../../../../utils";

const Product = (props) => {
    const { product, number } = props;
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);

    const handleDeleteProduct = async (product) => {
        await dispatch(DeleteProduct(product._id));
        dispatch(paginationProduct(currentPage));
    };

    return (
        <tr>
            <td>{number + 1}</td>
            <td>
                <img src={product.img} />
            </td>
            <td>{product.name}</td>
            <td>{formatPrice(product.discount)}</td>
            <td>{product.type}</td>
            <td
            className="delete-product"
            onClick={(e) => handleDeleteProduct(product)}>

            </td>
            <td className="update-product">
                <Link to={`/admin/product/update/${product._id}`}>

                </Link>
            </td>
            <td className="review-product">
                <Link to={`/admin/product/reviewProduct/${product._id}`}>
                    
                </Link>
            </td>
        </tr>
    )
}

export default Product;