import React, { useContext, useEffect, useState } from "react"
import { LoginStateContext } from "../App"
import axios from "axios";
import Logout from "./Logout";
import LoginGoogle from "./LoginGoogle";

const Home = () => {

	const {login, setLogin} = useContext(LoginStateContext);
	const [id, setId] = useState(null);
	const [email, setEmail] = useState(null);

	useEffect(()=>{
        console.log("loginStatus", login);
    })

	useEffect( ()=>{
		if(!localStorage.getItem("access_token")) {
			setLogin(false);
			setId(null);
			setEmail(null);
		} else {
			async function getUserData() {
				const {data} = await axios.get("http://127.0.0.1:8000/account/user/", {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
				if (data.status) {
					setId(data.user.id)
					setEmail(data.user.email)
				}
			}
			getUserData()
		}
	}, [login, setLogin])

	return (
		<div className="Home">
			<h3>Id: {id}</h3>
			<h3>Email: {email}</h3>
			{login ? <Logout /> : <LoginGoogle />}
		</div>
	)
}

export default React.memo(Home);