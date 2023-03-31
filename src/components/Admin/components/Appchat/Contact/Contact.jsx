import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConversationList, showConversation, updateIdConversation, updateLastMessageConversation } from "../../../../../store/Chat/ChatAction";
import ListConversation from "./ListConversation";

const Contact = () => {
    let socket;
    const ENDPOINT = "";
    const dispatch = useDispatch();
    const conversationList = useSelector(state => state.chat.conversationList);
    const idConversation = useSelector(state => state.chat.idConversation);

    if (conversationList) {

    }

    useEffect(() => {
        dispatch(getAllConversationList)
    }, [])

    useEffect(() => {
        if (conversationList) {
            dispatch(updateIdConversation(conversationList[0]))
        }
    }, [conversationList])

    useEffect(() => {
        // socket = io(ENDPOINT)

        socket.on("lastMessage", async data => {
            await dispatch(updateLastMessageConversation(data))
            dispatch(getAllConversationList())
        })

        socket.on("show-me", data => {
            dispatch(showConversation(data))
        })

        return () => socket.disconnect()
    }, [])

    const onConversationClick = (conversation) => {
        dispatch(updateIdConversation(conversation))
    }

    return (
        <div className="contact">
            {
                conversationList
                 ? (
                 <ListConversation 
                    conversationList={conversationList}
                    onConversationClick={onConversationClick}
                        ></ListConversation>
                        ): ""
            }
        </div>
    );
}

export default Contact;