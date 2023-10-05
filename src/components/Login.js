import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm &&<input
          type="Text"
          placeholder="Full Name"
          className="p-4 my-2 w-full bg-gray-800"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <button className="p-4 my-2 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netfliex? Sign Up Now" : "Already a registered? Sign In Now."}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
