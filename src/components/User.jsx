function User({ user }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">

            <h2 className="text-xl font-bold text-gray-800">
                {user.first_name} {user.last_name}
            </h2>

            <p className="text-blue-600 font-medium mt-1">
                {user.job_title}
            </p>

            <div className="mt-4 space-y-2 text-gray-600">

                <p>
                    <span className="font-semibold text-gray-800">
                        Email:
                    </span>{" "}
                    {user.email}
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        Age:
                    </span>{" "}
                    {user.age}
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        Gender:
                    </span>{" "}
                    {user.gender}
                </p>

            </div>

        </div>
    );
}

export default User;