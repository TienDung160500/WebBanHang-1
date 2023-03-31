import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./products/productSlice";
import { searchReducer } from "./search/search";
import { getAllUserReducer, UserSigninReducer, UserSignupReducer } from "./user/UserReducer";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        isSearch: searchReducer,
        users: getAllUserReducer,
        userSignin: UserSigninReducer,
        userSignup: UserSignupReducer,
    },
});

export default store;