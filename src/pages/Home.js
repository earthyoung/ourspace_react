import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAccessTokenGoogle, getAccessTokenKakao } from "./home_service"
import { LoginStateContext } from "../App";



const Home = () => {
	const loginWith = useRef(localStorage.getItem("loginWith"));
    const {accessToken, setAccessToken} = useContext(LoginStateContext);
	const navigate = useNavigate();

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		const accessToken = localStorage.getItem("accessToken");

		if (codeParam && !accessToken && loginWith.current === "google") {
			getAccessTokenGoogle(codeParam).then(res => {
				localStorage.setItem("accessToken", res.access_token);
                setAccessToken(res.access_token);
			})
		} else if (codeParam && !accessToken && loginWith.current === "kakao") {
			getAccessTokenKakao(codeParam).then(res => {
				localStorage.setItem("accessToken", res.access_token);
                setAccessToken(res.access_token)
			})
		}
	}, [loginWith])

	// useEffect(() => {
	// 	const accessToken = localStorage.getItem("accessToken")

	// 	if (accessToken && loginWith.current === "Google") {
	// 		getUserDataGoogle(accessToken).then(resp => {
	// 			setUserDataGoogle(resp)
	// 		})
	// 	}
	// }, [loginWith])

	const setLogOut = () => {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("loginWith")
		navigate("/")
	}

	return (
		<>
            <h3>{accessToken}</h3>
		</>
	)
}

export default Home