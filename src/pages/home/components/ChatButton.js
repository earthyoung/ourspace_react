import React from "react";
import Button from "../../../components/Button";

const ChatButton = () => {

    const handleChat = () => {}

    return (
        <Button text={"Chat"} handleOnClick={handleChat} />
    )
}

export default React.memo(ChatButton);
