import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../../App";
import Button from "../../../components/Button";


const Logout = () => {

    const navigate = useNavigate();
    const {login, setLogin} = useContext(LoginStateContext);

    const handleLogout = async () => {
        console.log("handleLogout called")
        const {data} = await axios.post(process.env.REACT_APP_API_HOST + "/account/logout/", {}, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
        console.log("data--logout", data)
        if(data.status) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setLogin(false);
            navigate("/");
        }
    }

    return (
        <Button text={"Logout"} handleOnClick={handleLogout} />
    )
};

export default React.memo(Logout);