import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCurrentPage, paginationProduct } from "../../../../store/products/productActionAdmin";
import Product from "./Product"

const ListProduct = (props) => {
    const dispatch = useDispatch();
    const {listProducts} = props;
    const currentPage = useSelector(state => state.allProduct.currentPage);
    const {pages} = useSelector(state => state.allProduct.product)

    const handleChangePage = async (number) => {
        await dispatch(paginationProduct(number))
        dispatch(editCurrentPage(number))
    }

    return (
        <div className="admin-product-list">
            <table>
                <tr>
                    <th></th>
                    <th>Imgae</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Type</th>
                </tr>
                {
                    listProducts ? listProducts.map((item, index) => (
                        <Product
                        product={item}
                        key={item._id}
                        update={item._id}
                        number={index}></Product>
                    )) : ""
                }
            </table>

            <div className="pagination">

            </div>
        </div>
    )
}

export default ListProduct;