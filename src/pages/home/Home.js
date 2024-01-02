import axios from "axios";
import React, { useContext, useEffect } from "react";
import { LoginStateContext } from "../../App";
import ChatButton from "./components/ChatButton";
import EmailButton from "./components/EmailButton";
import LoginGoogle from "./components/LoginGoogle";
import LoginKakao from "./components/LoginKakao";
import Logout from "./components/Logout";
import PostButton from "./components/PostButton";

const Home = () => {

	const {login, setLogin, id, setId, email, setEmail} = useContext(LoginStateContext);

	useEffect( ()=>{
		const accessToken = localStorage.getItem("access_token")
		if(!accessToken) {
			setLogin(false);
			setId(null);
			setEmail("익명");
		} else {
			if (!login || !id) {
				async function getUserData() {
					const {data} = await axios.get(process.env.REACT_APP_API_HOST + "/account/user/", {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
					if (data.status) {
						setId(data.user.id)
						setEmail(data.user.email)
						setLogin(true)
					}
				}
				getUserData()
			}
		}
	}, [login, setLogin])

	const Buttons = () => {
		return (
			<div className="Buttons">
				<EmailButton />
				<ChatButton />
				<Logout />
				<PostButton />
			</div>
		)
	}

	const LoginButtons = () => {
		return (
			<div className="LoginButtons">
				<LoginGoogle />
				<LoginKakao />
			</div>
		)
	}

	return (
		<div className="Home">
			<div className="EmailInput"><div className="EmailInputName">{email}</div>님, 환영합니다!</div>
			<br />
			{login ? <Buttons /> : <LoginButtons />}
		</div>
	)
}

export default React.memo(Home);