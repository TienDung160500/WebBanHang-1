import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./products/productSlice";
import { searchReducer } from "./search/search";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        isSearch: searchReducer,
    },
});

export default store;