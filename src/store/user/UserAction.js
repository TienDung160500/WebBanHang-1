import axios from "axios"

const BASE_URL_ADMIN = process.env.REACT_APP_API_ADMIN_KEY;

export const login = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/user/login`,user)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        localStorage.setItem('userInfor')
    } catch (error) {
        dispatch ({ type: 'USER_LOGIN_FAIL', payload: error.respone.data.message })
    }
};

export const SignupUser = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/user/register`,user)
        dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
        // localStorage.setItem('userInfor')
        document.location.href = '/';
    } catch (error) {
        
    }
}

export const SignoutUser = (user) => async (dispatch) => {
    localStorage.removeItem('userInfor');
    dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {}})
    document.location.href = '/';
}

export const GetAllUser = () => async (dispatch, getState) => {
    const {
        userSignin: {userInfor}
    } = getState()
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/user`)
        dispatch({type: 'GET_ALL_USER', payload: data})
    } catch (error) {
        dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
    }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
    const {
        userSignin: {userInfor}
    } = getState()
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/user/delete/${userId}`)
        dispatch({type: 'DELETE_USER', payload: data})
    } catch (error) {
        dispatch({type: 'DELETE_USER_FAIL', error: error.message})
    }
}