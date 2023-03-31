import axios from "axios";

const BASE_URL_ADMIN = process.env.BASE_URL_ADMIN;


export const getAllTypeProduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/typeList`)
        dispatch({type: 'GET_ALL)_TYPE_PRODUCT', payload: data});
    } catch (error) {
        
    }
}

export const CreateNewTypeProduct = (type) => async (dispatch) => {
    try {
         const {data} = await axios.post(`${BASE_URL_ADMIN}/typeList/create`, type)
         dispatch({type: 'CREATE_NEW_TYPE_PRODUCT', payload:data})
    } catch (error) {
        
    }
}

export const deleteTypeProduct = (type) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${BASE_URL_ADMIN}/typeList/delete/${type._id}`)
        dispatch({type: 'DELETE_TYPE_PRODUCT', payload: data})
    } catch (error) {
        
    }
}