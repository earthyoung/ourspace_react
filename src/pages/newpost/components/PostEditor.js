import React, { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { createNewPostAPI } from "../../../utils/api";

const PostEditor = ({newPost=true, postId}) => {

    const navigate = useNavigate();
    const handleSubmit = async () => {
        const data = createNewPostAPI(title, content);
        navigate("/post", {replace: true})
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="PostEditor">
            <section>
                <h3>title</h3>
                <div className="input-name">
                    <input type="text" className="input-text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
            </section>
            <section>
                <h3>content</h3>
                <div className="input-content">
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
            </section>
            <Button text={(newPost) ? "Submit" : "Update"} handleOnClick={handleSubmit} />
        </div>
    )
}

export default React.memo(PostEditor);
