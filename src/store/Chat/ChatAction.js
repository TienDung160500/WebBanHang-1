import axios from "axios";

const BASE_URL_ADMIN = process.env.BASE_URL_ADMIN;

export const getAllConversationList = (product) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BASE_URL_ADMIN}/chat`)
        dispatch({type: "GET_ALL_CONVERSATION", payload: data});
    } catch (error) {
        
    }
}

export const updateIdConversation = (conversation) => async (dispatch) => {
    dispatch({type: "UPDATE_ALL_CONVERSATION", payload: conversation});
}

export const updateLastMessageConversation = (message) => async (dispatch) => {
    dispatch({type: "UPDATE_LAST_MESSAGE_CONVERSATION", payload: message});
}

export const showConversation = (conversation) => async (dispatch) => {
    dispatch({type: "SHOW_CONVERSATION", payload: conversation});
}

export const seenConversation = (idConversation) => async (dispatch) => {
    dispatch({type: "SEEN_CONVERSATION", payload: idConversation});
}