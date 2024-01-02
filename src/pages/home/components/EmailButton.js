import React from "react";
import Button from "../../../components/Button";

const EmailButton = () => {
    const handleEmail = () => {}

    return (
        <Button text={"email"} handleOnClick={handleEmail}/>
    )
}

export default React.memo(EmailButton);
