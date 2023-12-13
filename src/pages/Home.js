import React, { useContext, useEffect, useState } from "react"
import { LoginStateContext } from "../App"
import axios from "axios";
import Logout from "./components/Logout";
import LoginGoogle from "./components/LoginGoogle";
import LoginKakao from "./components/LoginKakao";

const Home = () => {

	const {login, setLogin} = useContext(LoginStateContext);
	const [id, setId] = useState(null);
	const [email, setEmail] = useState("익명");

	useEffect(()=>{
        console.log("loginStatus", login);
    })

	useEffect( ()=>{
		const accessToken = localStorage.getItem("access_token")
		if(!accessToken) {
			setLogin(false);
			setId(null);
			setEmail("익명");
		} else {
			if (!login) {
				async function getUserData() {
					const {data} = await axios.get("http://127.0.0.1:8000/account/user/", {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
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
				<LoginGoogle />
				<LoginKakao />
			</div>
		)
	}

	return (
		<div className="Home">
			<div className="EmailInput"><div className="EmailInputName">{email}</div>님, 환영합니다!</div>
			{login ? <Logout /> : <Buttons />}
		</div>
	)
}

export default React.memo(Home);