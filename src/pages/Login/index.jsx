import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaceBookicon from "../../assests/Icons/FaceBookicon";
import GoogleIcon from "../../assests/Icons/GoogleIcon";
import AppleIcon from "../../assests/Icons/AppleIcon";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import Logo from "../../components/Logo";
function Login() {
  const [showpass, setShowPass] = useState({
    password: "",
    showPasssWord: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  const handlepassword = () => {
    setShowPass({ ...setShowPass, showPasssWord: !showpass.showPasssWord });
  };
  return (
    <div className="grid place-content-center overflow-hidden">
      <div className="flex">
        <div className="mr-[50px] mt-2  font-bold    hidden md:block ">
          <Logo />
          <div className="">
            <div className="text-[76px] mt-[200px] font-sans hidden md:block welcomeScreenTextShadow ">
              <h1 className="text-[#2A71E8] text-[70px]  font-sans ">Lets</h1>
              <h1 className="flex space-x-2  text-[#2A71E8]  text-[70px] font-sans ">
                Get<span className="ml-3 text-[#be2117]"> Started...</span>
              </h1>
            </div>
          </div>
          <button className="bg-gradient-to-b from-[#BE2117] to-[#09062C] rounded-[20px] p-4  px-11 text-white mt-5 w-[240px]">
            {" "}
            TRANSLATE
          </button>
        </div>

        <div className="ml-[100px]">
          <div className="sm:shadow-xl sm:bg-[#f4f4f4] overflow-hidden  p-5 rounded-[20px]  sm:w-[350px] mt-5 mb-3 items-center px-5 ">
            <div className="pb-10">
              <h1 className="font-bold sm:ml-[100px] ml-[170px] text-[34px] text-[#464461]  font-sans mt-[50px]   md:hidden ">
                Translate<span className="text-[#BE2117]">4Edu</span>
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-[#3a3856] text-[20px]  ml-[100px]  hidden md:block ">
                LOGIN
              </h1>
            </div>
            <form
              className="sm:space-y-2  space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="">
                <label className="font-bold  text-[14px] font-sans ml-[120px] sm:ml-0">
                  {" "}
                  Email address or username{" "}
                </label>
                <div className="border p-2 rounded-[20px]  sm:mr-0 mr-7 w-[350px] sm:w-[300px] border-[#8a8a8a] flex items-center px-2 ml-[120px]  sm:ml-0 ">
                  <input
                    className="bg-transparent rounded-full sm:h-[30px] h-[50px] p-2 w-full focus:outline-none"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <label className="font-bold  text-[14px] font-sans ml-[120px]  sm:ml-0">
                  {" "}
                  Password{" "}
                </label>
                <div className="border p-2 rounded-[20px]  sm:mr-0 mr-7 w-[350px] sm:w-[300px] border-[#8a8a8a] flex items-center px-2  ml-[120px]  sm:ml-0 ">
                  <input
                    className="bg-transparent rounded-full sm:h-[30px] h-[50px] p-2 w-full focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={handlepassword}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3
                className=" sm:ml-[100px] text-[20px]  font-bold text-sm text-blue-white font-sans p-2  ml-[200px] mt-1  "
                href="#"
              >
                Forgot Password?
              </h3>
              <button
                className="bg-[#2A71E8] sm:mr-14  mr-10 w-[350px] sm:w-[300px] py-3  ml-[120px] sm:mt-5  text-white font-bold  px-4  sm:ml-0  border  rounded-[20px] focus:outline-none focus:shadow-outline block "
                type="submit"
              >
                Log in{" "}
              </button>
            </form>
            <div className="flex">
              <div className="borderlines w-[150px] mt-8"></div>
              <div className="sm:mr-[500px] mr-[250px]">
                <div className=" flex py-4 ">
                  <div className="  flex items-center ">
                    <div className="w-[130px] border-[.977597px] h-[3px] border-black mb-3 "></div>
                  </div>
                  <div className="flex">
                    <span className=" px-2 text-sm text-black mb-5 font-bold">
                      OR
                    </span>
                    <div className="w-[130px] border-[.977597px] h-[3px] border-black mt-3 "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-[40px] justify-center   sm:mr-0 mr-[70px] cursor-pointer">
              <div class="rounded-full h-[50px] w-[50px] py-1 ">
                <GoogleIcon />
              </div>
              <div class="rounded-full h-[50px] w-[50px] bg-[#3C5A99] px-2 py-3  ">
                <FaceBookicon />
              </div>
              <div class="rounded-full h-[50px] w-[50px] bg-[#999999] px-2 py-2  ">
                <AppleIcon />
              </div>
            </div>
            <div className="py-2 sm:ml-[50px] sm:mr-0  sm:mt-14  ml-[200px] cursor-pointer flex  mt-9 text-[14px] font-sans font-bold">
              Dont Have account ?<Link to="/register">Sign Up here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
