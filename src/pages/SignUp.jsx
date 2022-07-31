import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/4f46d201-48d4-40a7-9bfb-8e260d680912/IN-en-20220725-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        ></img>
        <div className="bg-black/60 fixed w-full h-screen top-0 left-0"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassWord(e.target.value);
                  }}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
