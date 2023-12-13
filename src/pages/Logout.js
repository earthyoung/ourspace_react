import axios from "axios";

const Logout = () => {

    const handleLogout = async () => {
        await axios.post("http://127.0.0.1:8000/account/logout/");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }

    return (
        <div className="Logout">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Logout;