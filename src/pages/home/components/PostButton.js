import React from "react";
import { useNavigate } from "react-router-dom";

const PostButton = () => {

    const navigate = useNavigate();
    const handlePost = () => {
        navigate("/post")
    }

    return (
        <div className="PostButton">
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default React.memo(PostButton);
