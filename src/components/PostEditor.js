import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { createNewPostAPI, retrievePostAPI, updatePostAPI } from "../utils/api";

const PostEditor = ({newPost=true, postId}) => {

    const navigate = useNavigate();

    const handleClick = async () => {
        if (newPost) {
            handleSubmit();
        } else {
            handleUpdate();
        }
    }

    const handleSubmit = async () => {
        const data = createNewPostAPI(title, content);
        navigate("/post", {replace: true})
    }

    const handleUpdate = async () => {
        const data = await updatePostAPI(postId, title, content);
        navigate("/post", {replace: true})
    }

    const handleRetrieve = async () => {
        if (!newPost) {
            const data = await retrievePostAPI(postId);
            setTitle(data.name);
            setContent(data.content);
        }
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(()=>{
        handleRetrieve();
    }, [])

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
            <div className="buttons">
                <Button text={"Cancel"} handleOnClick={()=>{navigate(-1)}} />
                <Button text={(newPost) ? "Submit" : "Update"} handleOnClick={handleClick} />
            </div>
        </div>
    )
}

export default React.memo(PostEditor);
