import { createSlice } from "@reduxjs/toolkit";
import { fetchListProduct } from "./productActions";

const initialState = {
    product: []
};

const productSlice = createSlice({
    name: "products",
    initialState,
    // extraReducer: (builder) => {
    //     builder.addCase(fetchListProduct.fulfilled, (state, action) => {
    //         console.log('action',action);
    //         return action.payload
    //     });
    // },
    extraReducers: {
        [fetchListProduct.fulfilled]: (state, action) => {
            console.log('action.payload',action.payload);
            state.product = action.payload;
        }
    }
});

export const productReducer = productSlice.reducer
export const productActions = productSlice.actions