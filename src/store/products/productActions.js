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

export const saveProduct = (product) => async (dispatch, getState) => {
    try {
       const {
        userSignin: { userInfor }} = getState();
        if (!product.get('_id')) {
            const { data } = await axios.post(`${BASE_URL}/product/create`, product,
            {
                headers: {
                    Authorization:`Bearer ${userInfor}`,
                }
            })
            dispatch({type: "SAVE_PRODUCT", payload: data})
        } else {
            const { data } = await axios.put(`${BASE_URL}/product/update`,
            product,
            {
                headers: {
                    Authorization: `Bearer ${userInfor}`
                }
            });
            dispatch({ type:"SAVE_PRODUCT", payload:data })
        } 
    } catch (error) {
        dispatch({ type:"SAVE_PRODUCT_FAIL", payload: error.message })
        
    }
}

// export const editCurrentPage = (page) => async (dispatch) => {
//     dispatch({ type: "EDIT_CURRENT_PAGE", payload: page });
// }

