import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../App";


const Logout = () => {

    const navigate = useNavigate();
    const {login, setLogin} = useContext(LoginStateContext);

    const handleLogout = async () => {
        const {data} = await axios.post("http://127.0.0.1:8000/account/logout/", {}, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
        if(data.status) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setLogin(false);
            console.log("setLogin-false")
            navigate("/");
        }
    }

    return (
        <button className="Logout" onClick={handleLogout}>Logout</button>
    )
};

export default React.memo(Logout);