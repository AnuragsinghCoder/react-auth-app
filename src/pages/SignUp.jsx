import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        job_title: "",
        age: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message);
                return;
            }

            setMessage("Account created successfully!");

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (error) {
            console.error(error);
            setMessage("Server error");
        }
    };

    return (
        <div className="min-h-[calc(100vh-72px)] flex items-center justify-center p-6">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h1>

                <p className="text-gray-500 text-center mb-6">
                    Create your new account
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />

                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />

                    </div>

                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />

                    <input
                        type="text"
                        name="job_title"
                        placeholder="Job title"
                        value={formData.job_title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />

                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>

                </form>

                {message && (
                    <p className="text-center mt-4 text-gray-700">
                        {message}
                    </p>
                )}

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-600 font-semibold"
                    >
                        Login
                    </button>
                </p>

            </div>

        </div>
    );
}

export default Signup;