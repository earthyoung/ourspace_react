import React from "react";

const EmailButton = () => {
    const handleEmail = () => {}

    return (
        <div className="EmailButton">
            <button onClick={handleEmail}>Email</button>
        </div>
    )
}

export default React.memo(EmailButton);
