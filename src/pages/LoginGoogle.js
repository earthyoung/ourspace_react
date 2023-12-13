import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const LoginGoogle = () => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;

    const onSuccess = async (res) => {
        const user = {
            "grant_type": "convert_token",
            "client_id": clientId,
            "client_secret": clientSecret,
            "backend": "google-oauth2",
            "token": res.credential,
        }
        const {data} = await axios.post("http://127.0.0.1:8000/account/google/login/", user, {headers: {
            'Content-Type': 'application/json'
        }}, {withCredentials: true});
        axios.defaults.headers.common["Authorization"] = `Bearer ${data["access_token"]}`;
        localStorage.clear();
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