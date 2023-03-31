import axios from "axios";

const BASE_URL_ADMIN = process.env.BASE_URL_ADMIN;

export const createOrderGhn = (orderId) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/order/update${orderId}`);
        dispatch({type: "CREATE_ORDER_GHN", payload: data});
    } catch (error) {
        dispatch({ type: "CREATE_ORDER_ERROR", payload: error});
    }
};

export const PrintOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.get (`${BASE_URL_ADMIN}/print/${orderId}`);
        window.open(data)
        dispatch({ type: 'PRINT_ORDER_GHN', payload: data})
    } catch (error) {
        
    }
}