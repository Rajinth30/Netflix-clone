import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer transition duration-200">
          Netflix 2.0
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 hover:scale-110 ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2  rounded cursor-pointer transition duration-200 hover:scale-110 hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 hover:scale-110 ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2  rounded cursor-pointer transition duration-200 hover:scale-110 hover:bg-red-500">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
