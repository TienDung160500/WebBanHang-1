import axios from "axios";

const BASE_URL_ADMIN = process.env.REACT_APP_API_ADMIN_KEY;

export const filterProductByType = (name) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/products/${name}`);
        dispatch({type: 'FILTER_PRODUCT_BY_NAME', payload: data})
    } catch (error) {
        
    }
};

export const filterProductByRamdomFeild = (inforProduct) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/filter/ramdom`, inforProduct);
        dispatch({type: 'FILTER_PRODUCT_BY_RANDOM_FIELD', payload: data});
    } catch (error) {
        
    }
}

export const getAllProduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/products/`);
        dispatch({type: 'GET_ALL_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'GET_ALL_PRODUCT_FAIL', payload: error.message})
    }
};

export const ascendingProduct = (product) =>async (dispatch, getState) => {
    dispatch({type: 'ASCENDING_PRODUCT'});
};

export const descendingProduct = (product) =>async (dispatch, getState) => {
    dispatch({type: 'DESCENDING_PRODUCT'});
};

export const filterProduct = (name) =>async (dispatch, getState) => {
    dispatch({type: 'FILTER_PRODUCT', payload: name});
};

export const filterProductByPrice = (startPrice, endPrice) =>async (dispatch, getState) => {
    dispatch({type: 'FILTER_PRODUCT_BY_PRICE', payload: {startPrice, endPrice}});
};

export const editCurrentPage = (page) =>async (dispatch) => {
    dispatch({type: 'EDIT_CURRENT_PAGE', payload: page});
};

export const paginationProduct = (page) => async (dispatch) => {
    try {
        const data = await /*axiosClient*/axios.get(`${BASE_URL_ADMIN}/products/pagination/${page}`);
        dispatch({type: 'PAGINATION_PRODUCT', payload: data})
    } catch (error) {
        
    }
};

export const getProductById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/products/detail/${id}`);
        dispatch({type: 'GET_PRODUCT_BY_ID', payload: data});
    } catch (error) {
        dispatch({type: 'GET_PRODUCT_BY_ID_FAIL', payload: error.message})
    }
};

export const removeProductById = (id) => async (dispatch) => {
    dispatch({type: 'REMOVE_PRODUCT_BY_ID'});
};

export const saveProduct = (product) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfor}
        } = getState();
        if (!product.get('_id')) {
            const {data} = await axios.post(`${BASE_URL_ADMIN}/products/create`, product,
            {
                headers: {
                    Authorization: `Bearer ${userInfor.token}`,
                },
            });
            dispatch({type: 'SAVE_PRODUCT', payload: data})
        } else {
            const {data} = await axios.put(`${BASE_URL_ADMIN}/products/update`, product,
            {
                headers: {
                    Authorization: `Bearer ${userInfor.token}`,
                },
            });
            dispatch({type: 'SAVE_PRODUCT', payload: data});
        }
    } catch (error) {
        dispatch({type: 'SAVE_PRODUCT_FAIL', payload: error.message});
    }
};

export const DeleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfor},
        } = getState();
        const {data} = await axios.delete(`${BASE_URL_ADMIN}/products/delete/${productId}`,
        {
            headers: {
                Authorization: `Bearer ${userInfor.token}`,
            },
        });
        dispatch({type: 'DELETE_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message});
    }
};

export const searchProduct = (name) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/products/search/product?name=${name}`);
        dispatch({type: 'SEARCH_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'SEARCH_PRODUCT_FAIL', payload: error.message});
    }
};

export const reviewProduct = (id, review) => async (dispatch, getState) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/rate/${id}`, review);
        dispatch({type: 'REVIEW_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'REVIEW_PRODUCT_FAIL', payload: error});
    }
};

export const commentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/comment/${id}`, comment);
        dispatch({type: 'COMMENT_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'COMMENT_PRODUCT_FAIL', payload: error});
    }
};

export const repCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/rep/comment/${id}`, comment);
        dispatch({type: 'REP_COMMENT_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'REP_COMMENT_PRODUCT_FAIL', payload: error});
    }
};

export const pinCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/pin/comment/${id}`, comment);
        dispatch({type: 'PIN_COMMENT_PRODUCT', payload: data});
    } catch (error) {
        dispatch({type: 'PIN_COMMENT_PRODUCT_FAIL', payload: error});
    }
};

export const BlogProduct = (id, blog, callback) => async (dispatch, getState) => {
    const {
        userSignin: {userInfor},
    } = getState();
    try {
        const {data} = await axios.post(`${BASE_URL_ADMIN}/products/blog/${id}`, blog, 
        {
            headers: {
                Authorization: `Bearer ${userInfor.token}`
            },
        });
        dispatch({type: "BLOG_PRODUCT", patload: data});
        callback();
    } catch (error) {
        dispatch({type: "BLOG_PRODUCT_FAIL", patload: error});
    }
}