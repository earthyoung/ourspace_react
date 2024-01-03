import React, { useContext, useEffect } from "react";
import { dataStateContext } from "../../App";
import { retrieveMyPostAPI } from "../../utils/api";
import Home from "../home/Home";
import CreatePostButton from "./components/CreatePostButton";
import PostItem from "./components/PostItem";

const PostView = () => {

    const {data, setData} = useContext(dataStateContext);
    const fetchData = async function () {
        const result = await retrieveMyPostAPI();
        if (result !== data) {
            setData(result)
        }
    }
    
    useEffect(()=>{
       fetchData();
    }, [])

    return (
        <>
            <Home />
            <div className="PostView">
                <div className="PostViewButton">
                    <CreatePostButton />
                </div>
                {data.map((d) => (<PostItem key={d.id} id={d.id} name={d.name} content={d.content} />))}
            </div>
        </>
    )
}

export default React.memo(PostView);
