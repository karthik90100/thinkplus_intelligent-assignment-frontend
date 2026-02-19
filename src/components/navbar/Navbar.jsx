import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="navbar">
            <h2>Think+</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Navbar;
