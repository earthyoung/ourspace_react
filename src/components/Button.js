import React from "react";

const Button = ({text, handleOnClick}) => {

    return (
        <div className="Button">
            <button onClick={handleOnClick}>{text}</button>
        </div>
    )
}

export default React.memo(Button);
