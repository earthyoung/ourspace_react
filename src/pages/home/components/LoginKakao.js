import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../../App";
import KakaoLogin from "react-kakao-login";
import axios from "axios";


const LoginKakao = () => {

    const navigate = useNavigate();
    const {login, setLogin, id, setId, email, setEmail} = useContext(LoginStateContext);
    const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;

    const kakaoOnSuccess = async (res)=>{
        const accessToken = res.response.access_token;
        const refreshToken = res.response.refresh_token;
        const userData = {
            "access_token": accessToken,
            "refresh_token": refreshToken
        }
        const {data} = await axios.post(process.env.REACT_APP_API_HOST + "/account/kakao/login/", userData)
        console.log("data--kakao login", data)
        setLogin(true);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        setId(data.user.id);
        setEmail(data.user.email);
        navigate("/");
    }
    
    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return (
        <div className="KakaoLogin">
            <KakaoLogin
              token={clientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />
        </div>
    )
}

export default React.memo(LoginKakao);
