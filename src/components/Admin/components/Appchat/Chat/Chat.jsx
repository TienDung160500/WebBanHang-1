import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListMessage from "./ListMessage";
import TypeMessage from "./TypeMessage";

const BASE_URL_ADMIN = process.env.BASE_URL_ADMIN;

const Chat = () => {
    let socket;
    const ENDPOINT = "";
    const [messages, setMessages] = useState([]);
    const {userInfor} = useSelector((state) => state.userSignin);
    const idConversation = useSelector((state) => state.chat.idConversation);
    const nameConversation = useSelector((state) => state.chat.nameConversation);

    useEffect(() => {
        if (!idConversation)
        return;
        const getAllMessageByConversation = async () => {
            const {data} = await axios.get(`${BASE_URL_ADMIN}/chat/message?idConversation=${idConversation}`);
            setMessages(data.messageList);
        };

        getAllMessageByConversation();
    }, [idConversation]);

    useEffect(() => {
        // socket = io(ENDPOINT)

        socket.emit("admin_join_conversation", idConversation);

        socket.on("newMessage", (message) => {
            setMessages([...messages, message]);
        });

        return () => socket.disconnect();
    });

    useEffect(() => {
        const scrollMessage = () => {
            var element = document.querrySelector(".ad-chatuser-listmessage");
            element.scrollTop = element.scrollHeight;
        }

        scrollMessage();
    })

    const handleFormSubmit = async (message) => {
        const sender = userInfor.name;

        const payload = {
            sender,
            message,
            idConversation,
        };
        const {data} = await axios.post(`${BASE_URL_ADMIN}/chat/save`, payload);
        socket.emit("chat", data);
    };

    return (
        <div className="ad-chatuser">
            <div className="ad-chatuser-user">
                <span className="ad-chatuser-user-name">{nameConversation}</span>
            </div>

            {messages ? (
                <ListMessage
                messages = {messages}
                user={userInfor}></ListMessage>
            ) : ("")}

            <TypeMessage onSubmit={handleFormSubmit}></TypeMessage>
        </div>
    )
}

export default Chat;