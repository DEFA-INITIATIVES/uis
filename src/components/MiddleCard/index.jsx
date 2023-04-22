import React from "react";
import Arrow from "../../assests/Icons/Arrow";
import Arrow2 from "../../assests/Icons/Arrow2";
import { Link } from "react-router-dom";

function MiddleCard() {
  return (
    <div>
      <div className="sm:mt-5  ml-3 mt-3 relative flex  w-full justify-center  ">
         {/* <h3 className="text-black font-sans font-bold text-[20px] ml-5 mt-2 ">
                About us
          </h3> */}
        <div className="sm:flex sm:flex-row  sm:gap-5  bg-white  aboutUsShadow rounded-[20px] w-[90%] sm:h-[426px]  mr-5 h-[500px] mb-10 relative"> 
          <div className="sm:max-w-[325px]">
            <img
              src={require("../../assests/img/card.jpg")}
              alt=""
              className=" h-[101%] w-[325px] mt-[-3px] bg-gray-400 mr-10  rounded-tl-[20px] sm:rounded-bl-[20px]  hidden md:block"
            />
            <img
              src={require("../../assests/img/imghomesmall.jpg")}
              alt=""
              className="h-[216px] w-[full] bg-gray-400 mr-10 rounded-t-lg sm:rounded-l-lg  sm:hidden"
            />
          </div>
          <div className=" mt-4 max-sm:px-4 ">
            <h2 className="font-sans text-[#053676] pb-3 sm:pb-5 font-[700]  sm:text-[36px] ">
              {" "}
              DMB Translation Services
            </h2>
            <p className="text-black font-[600] sm:w-[35rem] sm:text-[17px] text-[15.5px] font-sans ">
              Is a Social-Enterprise seeking to inspire inclusive communities
              for people living with disabilities through the development and
              provision of modern, affordable, and reliable assistive
              technologies. Our Flagship product, the Digital Sign Language
              Interpreter, is a mobile and web Application that translates Sign
              language to Speech and Text, and vice versa, all in real-time.
            </p>
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3  rounded-full">
            <Link to="/showinput">
              <div className="max-sm:hidden">
                <Arrow />
              </div>
              <div className="sm:hidden">
                <Arrow2 />
              </div>
            </Link>
          </div>
        </div>
        {/* <div className=" hidden md:block bg-white shadow-lg rounded-[20px] ml-10 sm:h-[426px] w-[400px]  mr-10">
          <div className="border border-[#053676] w-[349px]  rounded-[20px]  h-[160px] ml-5 mt-10 ">
            <img
              src={require("../../assests/img/menue.png")}
              className="ml-[130px] mt-2"
              alt=""
            />
            <h3 className="ml-[100px] text-[#09062C] font-sans font-bold">
              TEXT AND SPEECH
            </h3>
            <h3 className="ml-[150px] text-[#09062C] font-sans font-bold">
              {" "}
              To
            </h3>
            <h3 className="ml-[100px] text-[#BE2117]"> SIGN LANGUAGE</h3>
          </div>

          <div className="border border-[#053676] w-[349px]  rounded-[20px]  h-[160px] ml-5 mt-10">
            <img
              src={require("../../assests/img/clamphand.png")}
              className="ml-[130px] mt-2"
              alt=""
            />
            <h3 className="ml-[100px] text-[#09062C] font-sans font-bold">
              TEXT AND SPEECH
            </h3>
            <h3 className="ml-[150px] text-[#09062C] font-sans font-bold">
              {" "}
              To
            </h3>
            <h3 className="ml-[100px] text-[#BE2117]"> SIGN LANGUAGE</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MiddleCard;
