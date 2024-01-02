import React, { useState } from "react";
import axios from "axios";

const PostEditor = ({newPost, postId}) => {

    const handleCreatePost = async () => {
        const {data} = await axios.post(process.env.REACT_APP_API_HOST + "/content/post/", {}, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="PostEditor">
            <div className="input-name">
                <input type="text" className="input-text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="input-content">
                <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
            </div>
        </div>
    )
}

export default React.memo(PostEditor);
