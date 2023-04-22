import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Register() {
  const [showpass, setShowPass] = useState({
    password: "",
    showPasssWord: false,
  });
  const handlepassword = () => {
    setShowPass({ ...setShowPass, showPasssWord: !showpass.showPasssWord });
  };
  return (
    <div className="mb-[10px] mt-[20px] place-content-center grid  overflow-hidden mr-[500px]">
      <div className="flex">
        <div className=" mr-[150px] font-bold text-[#3a3856] font-sans  hidden md:block  ml-[20px] ">
          <div className="flex">
            <Logo />
          </div>
          <div className="mt-[150px]">
            <div className="start hidden md:block welcomeScreenTextShadow">
              <h1 className="text-[#2A71E8] font-sans text-[60px]  ">Lets</h1>
              <h1 className="flex space-x-2  text-[#2A71E8]  font-sans text-[70px]">
                Get<span className="ml-3 text-[#be2117]"> Started...</span>
              </h1>
            </div>
          </div>
          <button className="bg-gradient-to-b from-[#BE2117] to-[#053676] rounded-[20px] p-4  px-11 text-white  w-[240px]">
            {" "}
            TRANSLATE
          </button>
        </div>
        <div className=" sm:ml-[5px] mr-9 sm:mr-0">
          <div className="  sm:shadow-xl  absolute overflow-hidden  sm:h-[600px]  sm:top-[8px] sm:space-y-2 sm:rounded-[20px] px-5 sm:bg-[#f4f4f4]  sm:ml-4 sm:mr-4  w-[400px]">
            <div className="pb-2 flex items-center ml-4  ">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[40px] h-[40px] font-bold ml-3 sm:hidden text-black mt-[5px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Link>
              <h1 className="font-bold md:text-5xl text-[40px] text-[#464461]  font-sans mt-[5px] md:hidden ">
                Translate<span className="text-[#cb4d45]">4Edu</span>
              </h1>
            </div>
            <h2 className="font-bold text-[20px] font-sans ml-[120px]">
              {" "}
              Create Account
            </h2>

            <form className=" sm:mr-[50px]  sm:space-y-3 space-y-8  ml-5 items-center   ">
              <div className="sm:mt-2">
                <label className="font-bold text-lg font-sans text-[20px]">
                  {" "}
                  Surname{" "}
                </label>

                <div className="border  border-[#8a8a8a]  sm:w-[300px]  p-2 rounded-[20px] flex w-[350px] items-center px-2  ">
                  <input
                    className="bg-transparent rounded-full p-2 sm:h-[30px] h-[50px] w-full focus:outline-none"
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div className="">
                <label className="font-bold text-lg font-sans text-[20px] ">
                  {" "}
                  Other Names{" "}
                </label>
                <div className="border  border-[#8a8a8a] sm:w-[300px] p-2 rounded-[20px] flex  w-[350px] items-center px-2  ">
                  <input
                    className="bg-transparent rounded-full sm:h-[30px]  h-[50px] p-2 w-full focus:outline-none"
                    type="text"
                    placeholder=" Enter Name"
                  />
                </div>
              </div>
              <div className="">
                <label className="font-bold  text-lg font-sans text-[20px]">
                  {" "}
                  Email{" "}
                </label>
                <div className="border  border-[#8a8a8a] p-2 rounded-[20px]  sm:w-[300px]   w-[350px] flex items-center px-2  ">
                  <input
                    className="bg-transparent rounded-md p-2 w-full sm:h-[30px] h-[50px] focus:outline-none"
                    type="text"
                    placeholder=" Enter Email "
                  />
                </div>
              </div>
              <div className="">
                <label className="font-bold  text-[20px] font-sans">
                  {" "}
                  Password{" "}
                </label>
                <div className="border p-2 rounded-[20px] sm:w-[300px]  w-[350px] border-[#8a8a8a] flex items-center px-2  ">
                  <input
                    className="bg-transparent rounded-full sm:h-[30px] h-[50px] p-2 w-full focus:outline-none"
                    type={showpass.showPasssWord ? "text" : "password"}
                    placeholder=" Enter Password "
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

              <div className="">
                <label className="font-bold  text-lg"> Confirm Password </label>
                <div className="border p-2 rounded-[20px] sm:w-[300px]  w-[350px] border-[#8a8a8a] flex items-center px-2  ">
                  <input
                    className="bg-transparent rounded-full p-2  h-[50px] sm:h-[30px] w-full focus:outline-none"
                    type={showpass.showPasssWord ? "text" : "password"}
                    placeholder="Enter Password "
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
              <Link to='/'>
              <button
                className="bg-[#2A71E8] sm:w-[300px]  h-[50px] w-[350px] py-3  sm:mt-2 mb-2  mt-11 text-white font-bold  px-4   border  rounded-[20px] focus:outline-none focus:shadow-outline block "
                type="button"

              >
                {" "}
                Create Account
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
