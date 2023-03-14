import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_KEY;

export const fetchListProductInCart = createAsyncThunk(
    "cartSlice/fetchListProductInCart",
    async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/cart`);
            return data;
        } catch (error) {
            console.log(error, "Error");
        }
    }
);

export const addProductIntoCart = createAsyncThunk(
    "cartSlice/addProductIntoCart",
    async (item) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/cart`, {...item});
            return data;
        } catch (error) {
            console.log(error, "Error");
        }
    }
);

export const updateProductInCart = createAsyncThunk(
    "cartSlice/updateProductInCart",
    async (item) => {
        try {
            const { data } = await axios.put(`${BASE_URL}/cart/${item.id}`, {
                ...item,
            });
            return data;
        } catch (error) {
            console.log(error, "Error");
        }
    }
);

export const removeProductInCart = createAsyncThunk(
    "cartSlice/removeProductInCart",
    async (id) => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/cart${id}`);
            return data;
        } catch (error) {
            console.log(error, "Error");
        }
    }
);

