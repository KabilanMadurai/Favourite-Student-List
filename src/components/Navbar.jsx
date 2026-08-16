import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <span className="brand-icon">🎓</span>

                <div>
                    <h2>StudentHub</h2>
                    <span>Favourite Students</span>
                </div>
            </Link>

            <div className="nav-links">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                >
                    👨‍🎓 Students
                </Link>

                <Link
                    to="/favourites"
                    className={
                        location.pathname === "/favourites"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    ❤️ Favourites
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;