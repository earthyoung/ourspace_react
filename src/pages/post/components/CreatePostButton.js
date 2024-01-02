import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePostButton = () => {

    const navigate = useNavigate();
    const handleCreatePost = () => {
        navigate("/post/new")
    }

    return (
        <div className="CreatePostButton">
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    )
}

export default React.memo(CreatePostButton);
