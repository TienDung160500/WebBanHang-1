import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY;

export const fetchListProduct = createAsyncThunk(
    "products/getProducts",
    async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/product`)
            console.log('data', data);
            return data;
        } catch (error) {
            
        }
    }
)