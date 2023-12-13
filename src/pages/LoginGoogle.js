import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const LoginGoogle = () => {

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
        window.location.href = "/";
    }

    const onFailure = (err) => {
        console.log("failed:", err);
    }

    return (
        <div className="GoogleLogin">
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default LoginGoogle