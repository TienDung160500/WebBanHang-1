import axios from "axios";

const BASE_URL_ADMIN = process.env.REACT_APP_API_ADMIN_KEY;

export const getAllSelectList = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/selectList`)
        dispatch({type: "GET_ALL_SELECT_LIST", payload: data})
    } catch (error) {
        
    }
}

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/selectList/create`, item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        
    }
}

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`${BASE_URL_ADMIN}/selectList/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        
    }
}

export const getSelectListItem = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/selectList/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        
    }
}

export const deleteSelectListItem = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${BASE_URL_ADMIN}/selectList/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        
    }
}