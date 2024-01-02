import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const CreatePostButton = () => {

    const navigate = useNavigate();
    const handleCreatePost = () => {
        navigate("/post/new")
    }

    return (
        <Button text={"Create Post"} handleOnClick={handleCreatePost} />
    )
}

export default React.memo(CreatePostButton);
