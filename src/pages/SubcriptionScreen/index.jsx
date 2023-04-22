import React from "react";
import "./subcription.css";
import Logo from "../../components/Logo";
import { Cross1Icon } from "@radix-ui/react-icons";

function SubcriptionScreen({ ClosureCallback }) {
  return (
    <div className="grid place-items-center overflow-hidden relative">
      <div
        onClick={ClosureCallback}
        className="absolute font-[900] text-[35px] text-[#000] z-40 right-1 top-2 sm:right-5 sm:top-5"
      >
        <Cross1Icon />
      </div>

      <div className="flex">
        <div className="mr-[150px] font-bold text-[#3a3856] font-sans hidden md:block ">
          <Logo />
          <div className="">
            <div className=" hidden md:block welcomeScreenTextShadow ">
              <h1 className="pt-[200px]  text-[#2A71E8] text-[70px] font-sans">
                Lets
              </h1>
              <h1 className="text-[70px]  text-[#2A71E8] font-sans">
                Get
                <span className="ml-3 text-[#be2117] font-sans">
                  {" "}
                  Started...
                </span>
              </h1>
            </div>
          </div>

          <button className="bg-gradient-to-b from-[#BE2117] to-[#053676] rounded-[20px] p-4  px-11 text-white  w-[240px]">
            {" "}
            TRANSLATE
          </button>

          <h3 className="sm:mt-[100px] font-sans">
            Terms Of Use | Privacy Policy | Restore Purchases
          </h3>
        </div>

        <div className="sm:shadow-lg sm:w-[350px] w-full sm:rounded-[20px] mb-5 sm:h-[580px] sm:mt-5">
          <div className="">
            {/* overlay */}

            <img
              src={require("../../assests/img/banner.jpg")}
              alt=""
              className="banner sm:w-[350px] sm:rounded-[20px] h-[200px] w-full"
            />
          </div>

          <div className="py-1 px-4 ">
            <h1 className=" sm:ml-[20px]  font-sans font-bold sm:text-[30px] text-[50px]">
              {" "}
              All Premium
            </h1>

            <h1 className=" text-[#BE2117] sm:ml-[20px] font-sans font-bold sm:text-[30px] text-[50px]">
              Features.
            </h1>

            <p className=" sm:ml-[20px] font-sans sm:text-[15px]  text-[20px] font-bold pt-2">
              Get full access to all premium features, completely <br />{" "}
              ad-free. No commitment, cancel anytime.
            </p>
          </div>
          <div className=" sm:ml-[20px]  sm:mt-[100px] mt-[200px] justify-center ml-[20px] ">
            <div className=" ">
              <h3 className="ml-11 sm:ml-14 sm:mb-2  font-bold  sm:text-[11px] text-[15px] font-sans">
                3days free, then UGX 20,000/month
              </h3>

              <button className="btn  ml-4   sm:ml-7  bg-[#2A71E8]  rounded-[20px] sm:w-[250px] w-[300px]  py-3 text-white mt-3  font-sans">
                {" "}
                Try free
              </button>
              <h3 className="sm:mt-[100px] font-sans mt-7 ">
                Terms Of Use | Privacy Policy | Restore Purchases
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubcriptionScreen;
