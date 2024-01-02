import React from "react";
import PostEditor from "./components/PostEditor";

const NewPost = () => {
    return (
        <div className="NewPost">
            <section>
                <PostEditor />
            </section>
        </div>
    )
}

export default React.memo(NewPost);
