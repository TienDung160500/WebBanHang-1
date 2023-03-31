import React, { useState } from "react";

const TypeMessage = (props) => {
    const {onSubmit} = props;
    const [value, setValue] = useState("");

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!onSubmit || value === "")
        return;

        onSubmit(value);
        setValue("");
    };

    return (
        <form
        onSubmit={handleFormSubmit}
        className="ad-chatuser-typemessage">
            <input type="text"
            placeholder="Type a message"
            value={value}
            onChange={handleChangeValue} />
            <button type="Submit">Send</button>
        </form>
    )
}

export default TypeMessage;