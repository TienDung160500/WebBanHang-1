import React from "react";
import { getFirstCharacterUser } from "../../../../../utils";

const ListConversation = (props) => {
    const {conversationList, onConversationClick} = props;

    return (
        <div className="contact-list">
            {conversationList.map((conversation) => (
                <div 
                className="contact-list-item"
                onClick={() => onConversationClick(conversation)}>
                    <div className="contact-list-item-avatar">{getFirstCharacterUser(conversation.nameConversation)}</div>
                    <div className="contact-list-item-content">
                        <p className="contact-list-item-content">{conversation.nameConversation}</p>
                        <span className="contact-list-item-lastmessage">{conversation.lastMessage}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListConversation