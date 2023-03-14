import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import "./ProductItem.css"


const ProductItem = ({ item }) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className="product-item">
            {/* {
             !loaded &&
             (
                <img src="https://levents.asia/wp-content/uploads/2022/12/z3952944826899_5a77db95bfadc9405ecf20d58728cbb9-400x500.jpg" alt="poppop figure" />
            )
        } */}
            

            <img src={item?.image} 
            alt="product"
            onLoad={() => setLoaded(true)}
            style={{display: loaded ? "block" : "none"}}
            onClick={() => dispatch(addToCart(item))} 
            />
            <a href="">{item?.name}</a>
            <div className="p__infor">
                <span>{item?.price}</span>             
            </div>
        </div>
    );
};

export default ProductItem