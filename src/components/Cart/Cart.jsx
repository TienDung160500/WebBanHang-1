import React from "react";
import BillInfor from "../BillInfor/BillInfor";
import ListItemCart from "../ListItemCart/ListItemCart";
import "./Cart.css"

const Cart = () => {
    return (
        <div className="cart-container">
            <BillInfor />
            <ListItemCart />
        </div>
    );
};

export default Cart;