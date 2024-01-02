import axios from "axios"

const API_HOST = process.env.REACT_APP_API_HOST

const createNewPostAPI = async function (title, content) {
    return authorizedPostAPI("/content/post/", {"name": title, "content": content})
}

const retrieveAllPostAPI = async function () {
    return authorizedGetAPI("/content/post/")
}

const authorizedGetAPI = async function (url) {
    const {data} = await axios.get(API_HOST + url, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

const authorizedPostAPI = async function (url, body) {
    const {data} = await axios.post(API_HOST + url, body, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

export {createNewPostAPI, retrieveAllPostAPI};

