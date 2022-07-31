import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const buttonsOnSignIn = () => {
    return (
      <div>
        <Link to="/account">
          <button className="text-white pr-4">Account</button>
        </Link>
        <button
          className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    );
  };

  const buttonsOnSignOut = () => {
    return (
      <div>
        <Link to="/login">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    );
  };

  const NavBarButtons = user?.email ? buttonsOnSignIn : buttonsOnSignOut;

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      <NavBarButtons></NavBarButtons>
    </div>
  );
};

export default Navbar;
