import React from "react";
import Home from "../home/Home";
import CreatePostButton from "./components/CreatePostButton";

const PostView = () => {

    return (
        <>
            <Home />
            <div className="PostView">
                <div className="PostViewButton">
                    <CreatePostButton />
                </div>
            </div>
        </>
    )
}

export default React.memo(PostView);
