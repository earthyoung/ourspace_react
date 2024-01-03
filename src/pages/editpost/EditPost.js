import React from "react";
import PostEditor from "../../components/PostEditor";
import { useParams } from "react-router-dom";

const EditPost = () => {

    const {id} = useParams();

    return (
        <div className="EditPost">
            <section>
                <PostEditor newPost={false} postId={id} />
            </section>
        </div>
    )
}

export default React.memo(EditPost);
