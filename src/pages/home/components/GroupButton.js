import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const GroupButton = () => {

    const navigate = useNavigate();
    const handleGroup = () => {
        navigate("/groups")
    }

    return (
        <Button text={"Group"} handleOnClick={handleGroup} />
    )
}

export default React.memo(GroupButton);
