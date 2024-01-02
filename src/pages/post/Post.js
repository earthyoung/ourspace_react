import React, { useContext, useEffect } from "react";
import Home from "../home/Home";
import CreatePostButton from "./components/CreatePostButton";
import { dataStateContext } from "../../App";
import PostItem from "./components/PostItem";
import axios from "axios";
import { retrieveAllPostAPI } from "../../utils/api";

const PostView = () => {

    const {data, setData} = useContext(dataStateContext);
    const fetchData = async function () {
        const result = await retrieveAllPostAPI();
        setData(result)
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
                {data.map((d) => (<PostItem key={d.id} name={d.name} content={d.content} />))}
            </div>
        </>
    )
}

export default React.memo(PostView);
