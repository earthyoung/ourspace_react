import { useNavigate } from "react-router-dom"


const Login = () => {
	const navigate = useNavigate()

	const loginToKakao = () => {
		localStorage.setItem("loginWith", "kakao")
		window.location.assign("http://127.0.0.1:8000/account/kakao/login")
	}

	const loginToGoogle = () => {
		localStorage.setItem("loginWith", "google");
		window.location.assign("http://127.0.0.1:8000/account/google/login");
	}

	return (
		<div className="Login">
			<div className="kakao_login">
				<button onClick={loginToKakao}>Kakao Login</button>
			</div>
			<div className="google_login">
				<button onClick={loginToGoogle}>Google Login</button>
			</div>
		</div>
	)
}

export default Login