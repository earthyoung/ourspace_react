import React from "react";

const ChatButton = () => {

    const handleChat = () => {}

    return (
        <div className="ChatButton">
            <button onClick={handleChat}>Chat</button>
        </div>
    )
}

export default React.memo(ChatButton);
