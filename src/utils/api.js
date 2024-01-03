import axios from "axios"

const API_HOST = process.env.REACT_APP_API_HOST

const createNewPostAPI = async function (title, content) {
    return authorizedPostAPI("/content/post/", {"name": title, "content": content})
}

const retrieveAllPostAPI = async function () {
    return authorizedGetAPI("/content/post/")
}

const retrieveMyPostAPI = async function () {
    return authorizedGetAPI("/content/post/me/")
}

const retrievePostAPI = async function (id) {
    return authorizedGetAPI("/content/post/" + id.toString());
}

const updatePostAPI = async function (id, title, content) {
    return authorizedPatchAPI("/content/post/" + id.toString(), {"name": title, "content": content});
}

const destroyPostAPI = async function (id) {
    return authorizedDeleteAPI("/content/post/" + id.toString());
}

const retrieveMyGroupAPI = async function () {
    return authorizedGetAPI("/account/group/")
}

const authorizedGetAPI = async function (url) {
    const {data} = await axios.get(API_HOST + url, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

const authorizedPostAPI = async function (url, body) {
    const {data} = await axios.post(API_HOST + url, body, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

const authorizedPatchAPI = async function (url, body) {
    const {data} = await axios.patch(API_HOST + url, body, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

const authorizedDeleteAPI = async function (url) {
    const {data} = await axios.delete(API_HOST + url, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}});
    return data
}

export {createNewPostAPI, retrieveAllPostAPI, retrieveMyPostAPI, destroyPostAPI, updatePostAPI, retrievePostAPI, retrieveMyGroupAPI};
