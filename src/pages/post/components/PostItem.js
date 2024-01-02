import React from "react";

const PostItem = ({name, content}) => {
    return (
        <div className="PostItem">
            <div className="post-name">
                <strong>{name}</strong>
            </div>
            <br />
            <div className="post-content">
                {(content) ? (content.slice(0, 25)) : content}
            </div>
        </div>
    )
}

export default React.memo(PostItem);
