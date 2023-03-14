import { createSlice } from "@reduxjs/toolkit";
import { 
    addProductIntoCart, 
    fetchListProductInCart, 
    removeProductInCart, 
    updateProductInCart
} from "./cartActions";

// const initialState = [
//     {
//         id: "1",
//         price: 0,
//         discont: 0,
//         avatar: ""
//     },
// ];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state,action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            }else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state,action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        }, 
        incrementQuantity: (state, action) => {
            console.log('action',action);

            const item = state.cart.find((item) => item.id === action.payload);
            console.log('item',item);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            }else {
                item.quantity--;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListProductInCart.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(addProductIntoCart.fulfilled, (state, action) => {
            return state.push(action.payload);
        });

        builder.addCase(updateProductInCart.fulfilled, (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                }
                return item;
            });
        });

        builder.addCase(removeProductInCart.fulfilled, (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        });
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    removeItem,
    incrementQuantity, 
    decrementQuantity} = cartSlice.actions;