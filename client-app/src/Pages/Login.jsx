import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email,password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-[#1aac83] mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-[#1aac83]"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button className="w-full bg-[#1aac83] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Login
          </button>
          {error && <p>{error}</p>}

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="text-[#1aac83] font-semibold hover:underline"
            >
              {" "}
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
