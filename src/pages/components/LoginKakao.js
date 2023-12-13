import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../App";
import KakaoLogin from "react-kakao-login";
import axios from "axios";


const LoginKakao = () => {

    const navigate = useNavigate();
    const {login, setLogin} = useContext(LoginStateContext);
    const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;

    const kakaoOnSuccess = async (res)=>{
        const accessToken = res.response.access_token;
        const userData = {
            "access_token": accessToken
        }
        const {data} = await axios.post("http://127.0.0.1:8000/account/kakao/login/", userData)
        if(data.status) {
            setLogin(true);
        }
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

export default LoginKakao;
