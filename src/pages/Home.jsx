import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "../components/User";

function Home() {
    const token = localStorage.getItem("token");

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5000/users/");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <main className="min-h-[calc(100vh-72px)] px-6">

            {/* YOUR EXISTING CONTENT - UNCHANGED */}
            <div className="flex items-center justify-center pt-20">

                <div className="text-center max-w-3xl">

                    <p className="text-blue-600 font-semibold mb-3">
                        React + Node + MongoDB + JWT
                    </p>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Welcome to AuthApp
                    </h1>

                    <p className="text-gray-600 text-lg mb-8">
                        A simple authentication application built with
                        React, Tailwind CSS, Express, MongoDB and JWT.
                    </p>

                    {!token ? (
                        <div className="flex justify-center gap-4">

                            <Link
                                to="/login"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                            >
                                Create Account
                            </Link>

                        </div>
                    ) : (
                        <div className="bg-white shadow-lg rounded-xl p-6">

                            <h2 className="text-2xl font-semibold mb-2">
                                You're logged in 🎉
                            </h2>

                            <p className="text-gray-500">
                                Your JWT token is stored on the client.
                            </p>

                        </div>
                    )}

                </div>

            </div>


            {/* USERS SECTION */}
            <section className="max-w-6xl mx-auto py-16">

                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Users
                </h2>

                {loading && (
                    <p className="text-gray-500">
                        Loading users...
                    </p>
                )}

                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {users.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                            />
                        ))}

                    </div>
                )}

            </section>

        </main>
    );
}

export default Home;