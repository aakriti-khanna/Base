



import React, { useEffect, useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import Logo from "../assets/NewLogo.png";
import ImageUrl from "../assets/Sideright.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Login = () => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        setValue(data.user.email);
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setAuthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch((err) => navigate("/"));
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(true);
    }
    setCheck(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (authenticated && !check) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <div
        className={`flex flex-col sm:flex-row justify-evenly items-center w-full h-screen ${
          theme === "light" ? "bg-[#F5F5F5]" : "bg-[#1E1E1E]"
        }`}
      >
        <div className="relative flex h-screen mx-5 ">
          <div className="ml-10 mt-20 absolute h-4">
          <img src={Logo}></img>
          </div>
          <div
            className={`text-${
              theme === "light" ? "black" : "white"
            } font-bold ml-40 text-2xl absolute top-20 px-4`}
          >
            
          </div>
          <img src={ImageUrl} alt="Main visual" className=" max-h-screen object-cover rounded-4xl mt-5 mb-5" />
          
          <div className="absolute bottom-14 mb-6 ml-4 left-4 flex items-center">
            <label className="relative inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                className="sr-only"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center px-1 transition-colors duration-300">
                <div
                  className={`${
                    theme === "light" ? "translate-x-0" : "translate-x-6"
                  } w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-300`}
                >
                  {theme === "light" ? (
                    <FaMoon className="text-gray-800" size={20} />
                  ) : (
                    <FaSun className="text-gray-500" size={20} />
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col  gap-6 justify-center items-center">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-between items-start px-6 gap-2">
              <h2
                className={`text-[18px] sm:text-[36px] font-bold sm:leading-[43.88px] ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                Sign In
              </h2>
              <p
                className={`text-[16px] font-lato sm:leading-[19.2px] ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                Sign in to your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleClick}
                className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6"
              >
                <div className="flex justify-between items-center">
                  <img
                    src={google}
                    alt="google"
                    className="w-[14px] h-[14px]"
                  />
                  Sign in with Google
                </div>
              </button>
              <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6">
                <div className="flex justify-between items-center">
                  <img src={apple} alt="apple" className="w-[14px] h-[14px]" />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
              <form className="flex flex-col text-black px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Password..."
                  />
                </div>
                <p className="text-[#346BD4] cursor-pointer">
                  Forgot password?
                </p>
                <button
                  onClick={handleClick}
                  className="bg-[#605BFF] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div className="text-[#858585] mx-auto">
              Don't have an account?{" "}
              <div
                onClick={navigateSignup}
                className="text-[#346BD4] cursor-pointer"
              >
                Register here
              </div>
            </div>
          </div>
          <div className="fixed flex justify-center items-center w-full h-fit bottom-0 mb-5">
            <div className="flex gap-x-6">
              <img
                src={github}
                className="w-[34px] h-[34px] bg-gray-400"
                alt="GitHub"
              />
              <img
                src={twitter}
                className="w-[34px] h-[34px] bg-gray-400"
                alt="Twitter"
              />
              <img
                src={linkedin}
                className="w-[34px] h-[34px] bg-gray-400"
                alt="LinkedIn"
              />
              <img
                src={discord}
                className="w-[34px] h-[34px] bg-gray-400"
                alt="Discord"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;

