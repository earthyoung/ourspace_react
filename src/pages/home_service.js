import axios from "axios"

export const getAccessTokenGoogle = async (code) => {
	const { data } = await axios.get(`http://127.0.0.1:8000/account/google/callback/?code=${code}`, {
		headers: {
			"Content-Type": "application/json",
		},
	})

	return data
}

export const getAccessTokenKakao = async (code) => {
	const { data } = await axios.get(`http://127.0.0.1:8000/account/kakao/callback/?code=${code}`, {
		headers: {
			"Content-Type": "application/json",
		},
	})

	return data
}

