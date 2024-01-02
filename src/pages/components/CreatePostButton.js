import React from "react";
import axios from "axios";

const CreatePostButton = () => {

    const handleCreatePost = async () => {
        const {data} = await axios.post(process.env.REACT_APP_API_HOST + "/content/post/", {}, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    }

    return (
        <div className="CreatePostButton">
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    )
}

export default React.memo(CreatePostButton);
