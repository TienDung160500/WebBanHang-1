import React from "react";
import Chat from "./Chat/Chat";
import Contact from "./Contact/Contact";

const AppChat = () => {
    return (
        <section id="appchat">
            <span>Message</span>
            <div className="appchat">
                    <Contact></Contact>
                <div className="chat">
                    <Chat></Chat>
                </div>
            </div>
        </section>
    );
}

export default AppChat;