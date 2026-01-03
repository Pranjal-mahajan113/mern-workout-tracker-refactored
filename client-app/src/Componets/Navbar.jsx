import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}

        <Link to="/">
          <h1 className="text-2xl font-bold text-[#1aac83]">WorkoutBuddy</h1>
        </Link>

        {user && (
          <>
            <span className="text-sm text-gray-600">{user.email}</span>
            <button
              onClick={handleClick}
              className="px-4 py-2 border border-[#e7195a] text-[#e7195a] rounded hover:bg-[#e7195a] hover:text-white transition"
            >
              Logout
            </button>
          </>
        )}

        {/* Right Side Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user && (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 border border-[#1aac83] text-[#1aac83] rounded hover:bg-[#1aac83] hover:text-white transition"
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="px-4 py-2 bg-[#1aac83] text-white rounded hover:opacity-90 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
