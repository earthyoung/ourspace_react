import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const PostButton = () => {

    const navigate = useNavigate();
    const handlePost = () => {
        navigate("/post")
    }

    return (
        <Button text={"Post"} handleOnClick={handlePost} />
    )
}

export default React.memo(PostButton);
