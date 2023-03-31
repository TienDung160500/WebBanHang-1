import axios from "axios";

const BASE_URL_ADMIN = process.env.BASE_URL_ADMIN;

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const {data} = await axios.post(`${BASE_URL_ADMIN}/order/create`, order,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            }
        });
        dispatch({ type: "ORDER_CREATE-SUCCESS", payload: data });
        dispatch({ type:"CART_EMPTY" });
        localStorage.removeItem("cartItem")
    } catch (error) {
        
    }
};

export const updateOrder = (orderId, order) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();

        const { data } = await axios.post(`${BASE_URL_ADMIN}/order/update/${orderId}`,
        order,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "ORDER_UPDATE-SUCCESS", payload: data });
    } catch (error) {
        
    }
};

export const cancelOrder = (orderId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`${BASE_URL_ADMIN}/order/cancel/${orderId}`);
        dispatch({ type: "CANCEL_ORDER", payload: data });
    } catch (error) {
        
    }
};

export const getAllOrder = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfor},
        } = getState();
        const { data } = await axios.get(`${BASE_URL_ADMIN}/order/`, {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "GET_ALL_ORDER", payload: data });
    } catch (error) {
        
    }
};

export const RemoveAllOrder = () => (dispatch, getState) => {
    dispatch({ type: "REMOVE_ALL_ORDER" })
};

export const GetAllOrderPendding = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfor},
        } = getState();
        const { data } = await axios.get(`${BASE_URL_ADMIN}/order/orderPendding`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "GET_ALL_ORDER_PENDDING", payload: data })
    } catch (error) {
        
    }
}

export const GetAllOrderShipping = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.get(`${BASE_URL_ADMIN}/order/orderShipping`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "GET_ALL_ORDER_SHIPPING", payload: data })
    } catch (error) {
        
    }
}

export const GetAllOrderPaid = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.get(`${BASE_URL_ADMIN}/order/orderPaid`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "GET_ALL_ORDER_PAID", payload: data })
    } catch (error) {
        
    }
}

export const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.delete(`${BASE_URL_ADMIN}/order/delete/${orderId}`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "DELETE_ORDER", payload: data })
    } catch (error) {
        
    }
}

export const ShippingOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.put(`${BASE_URL_ADMIN}/order/shipping/${orderId}`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "SHIPPING_ORDER", payload: data })
    } catch (error) {
        
    }
}

export const PaidOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.put(`${BASE_URL_ADMIN}/order/paid/${orderId}`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "PAID_ORDER", payload: data })
    } catch (error) {
        
    }
}

export const GetAllProvince = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfor },
        } = getState();
        const { data } = await axios.get(`${BASE_URL_ADMIN}`,
        {
            headers: {
                Authorization: `Bearer ${userInfor}`,
            },
        });
        dispatch({ type: "DELETE_ORDER", payload: data })
    } catch (error) {
        
    }
}