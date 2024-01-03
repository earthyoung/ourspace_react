import React, { useEffect, useState } from "react";
import Home from "../home/Home";
import { retrieveMyGroupAPI } from "../../utils/api";
import GroupItem from "./components/GroupItem";

const Group = () => {

    const [group, setGroup] = useState([]);
    const fetchData = async function () {
        const data = await retrieveMyGroupAPI();
        setGroup(data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <>
            <Home />
            <div className="Group">
                {group.map((g) => (<GroupItem key={g.id} type={g.type} name={g.name} />))}
            </div>
        </>
    )
}

export default React.memo(Group);
