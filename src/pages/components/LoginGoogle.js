import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import React, { useContext } from "react";
import { LoginStateContext } from "../../App";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {

    const navigate = useNavigate();
    const {login, setLogin, id, setId, email, setEmail} = useContext(LoginStateContext);
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const onSuccess = async (res) => {
        const token = {
            "token": res.credential,
        }
        const {data} = await axios.post("http://127.0.0.1:8000/account/google/login/", token, {headers: {
            'Content-Type': 'application/json'
        }}, {withCredentials: true});
        axios.defaults.headers.common["Authorization"] = `Bearer ${data["access_token"]}`;
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        setLogin(true);
        setId(data.user.id);
        setEmail(data.user.email);
        navigate("/");
    }

    const onFailure = (err) => {
        console.log("failed:", err);
    }

    const GoogleLoginButton = () => {
        return (
            <div className="GoogleLoginButton">
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                    />
                </GoogleOAuthProvider>
            </div>
        )
    }

    return (
        <div className="GoogleLogin">
            <GoogleLoginButton />            
        </div>
    )
}

export default React.memo(LoginGoogle);