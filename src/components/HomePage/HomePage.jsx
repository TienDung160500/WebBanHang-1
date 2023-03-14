import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductIntoCart, updateProductInCart } from "../../store/cart/cartActions";
import { fetchListProduct } from "../../store/products/productActions";
import ProductItem from "../ProductItem/ProductItem"
import "./HomePage.css"

const HomePage = () => {
    const BASE_URL = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product?.product) || [];
    const isSearch = useSelector((state) => state.isSearch);
    // const settings = {

    // };

    const handleAddProductIntoCart = (item) => {
        dispatch(addProductIntoCart({...item, quantity: 1, productId: item.id}));
    }

    const handleUpdateQuantity = (item) => {
        dispatch(updateProductInCart(item));
    }

    const handleCheckProductInCart = async (item) => {
        const {data} = await axios.get(`${BASE_URL}/cart?productId=${item.id}`);
        if (data.length > 0) {
            handleUpdateQuantity({...data[0], quantity: data[0].quantity + 1});
            return;
        }
        handleAddProductIntoCart(item);
    };

    useEffect(() => {
        dispatch(fetchListProduct());
    }, [dispatch]);

    return (
        <>
            <>
                <div className="m-list-product">
                    <div className="list-product">
                        {/* {!isSearch.isSearch
                            ?productList?.map((item, index) => (
                                <ProductItem
                                item={item}
                                key={index}
                                handleCheckProductInCart={handleCheckProductInCart} />
                                ))
                                :productList
                                ?.filter(
                                    (item) =>
                                    item.title
                                    .toLowerCase()
                                    .includes(isSearch.value.toLowerCase()) && item
                                    )
                                    .map((item,index) => (
                                        <ProductItem
                                        item={item}
                                        key={index}
                                        handleCheckProductInCart={handleCheckProductInCart} />
                                        ))
                        } */}
                        {productList?.map((item, index) => (
                                <ProductItem
                                item={item}
                                key={index}
                                handleCheckProductInCart={handleCheckProductInCart} />
                        ))}
                    </div>
                </div>
            </>
        </>
    )
}

export default HomePage