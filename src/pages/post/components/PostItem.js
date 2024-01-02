import React from "react";
import Button from "../../../components/Button";
import { destroyPostAPI } from "../../../utils/api";

const PostItem = ({id, name, content}) => {

    const deletePost = async () => {
        const data = await destroyPostAPI(id);
        console.log("deletePost data", data)
    }

    return (
        <div className="PostItem">
            <div className="post-name">
                <strong>{name}</strong>
            </div>
            <br />
            <div className="post-content">
                {(content) ? (content.slice(0, 25)) : content}
            </div>
            <Button text={"삭제하기"} handleOnClick={deletePost} />
        </div>
    )
}

export default React.memo(PostItem);
