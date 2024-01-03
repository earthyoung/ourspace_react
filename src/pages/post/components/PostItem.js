import React, { useContext } from "react";
import Button from "../../../components/Button";
import { destroyPostAPI, retrieveMyPostAPI } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { dataStateContext } from "../../../App";

const PostItem = ({id, name, content}) => {

    const navigate = useNavigate();
    const updatePost = async () => {
        navigate("/post/edit/" + id.toString())
    }

    const deletePost = async () => {
        const result = await destroyPostAPI(id);
        fetchData();
    }

    const fetchData = async function () {
        const result = await retrieveMyPostAPI();
        if (result !== data) {
            setData(result)
        }
    }

    const {data, setData} = useContext(dataStateContext);

    return (
        <div className="PostItem">
            <div className="post-name">
                <strong>{name}</strong>
            </div>
            <br />
            <div className="post-content">
                {(content) ? (content.slice(0, 25)) : content}
            </div>
            <div className="post-button">
                <Button text={"수정"} handleOnClick={updatePost} />
                <Button text={"삭제"} handleOnClick={deletePost} />
            </div>
        </div>
    )
}

export default React.memo(PostItem);
