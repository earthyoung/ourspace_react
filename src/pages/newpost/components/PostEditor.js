import React, { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const PostEditor = ({newPost, postId}) => {

    const navigate = useNavigate();
    const handleSubmit = async () => {
        console.log("handleSubmit called");
        const {data} = await axios.post(process.env.REACT_APP_API_HOST + "/content/post/", {"name": title, "content": content}, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
        console.log("handleSubmit data", data);
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
            <Button text={"Submit"} handleOnClick={handleSubmit} />
        </div>
    )
}

export default React.memo(PostEditor);
