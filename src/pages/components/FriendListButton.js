import axios from "axios";

const FriendListButton = () => {

    const handle = async () => {
        const {data} = await axios.get("http://127.0.0.1:8000/content/friends/", {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
    }

    return (
        <div className="FriendListButton">
            <button onClick={handle}>Friend List</button>
        </div>
    )
}

export default FriendListButton;
