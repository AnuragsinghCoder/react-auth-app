import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
                AuthApp
            </Link>

            <div className="flex gap-6 items-center">
                <Link
                    to="/"
                    className="hover:text-blue-400 transition"
                >
                    Home
                </Link>

                {!token ? (
                    <>
                        <Link
                            to="/login"
                            className="hover:text-blue-400 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Signup
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;