import React from "react";

import Pencil from "../../assests/Icons/Pencil";

function RightSideAccountSetting() {
  return (
    <div className="mt-14 shadow-md ml-5 w-[900px] h-full items-center  rounded-[25px] mr-8 ">
      <div
        className="border  h-[90px] rounded-[25px]  grid place-content-center w-full bg-gradient-to-b items-center  from-[#D62723]  to-[#2A71E8]"
      >
        <div className=" items-center">
          <div className="bg-white  rounded-full w-full h-full  mt-4  border relative border-gray-400 ">
            <img
              src={require("../../assests/img/profile.png")}
              alt=""
              className=" px-2 py-2   "
            />
             <div className="ml-10 pb-2"><Pencil /></div>
          </div>
        </div>
      </div>

       <form action="
       
       ">

<div className="mt-5 grid place-content-center space-y-3 h-full">
<div>
          <label> Name</label>
          <div className=" border w-full h-[30.42px] rounded-[25px]  flex items-center relative">
            <input type="text" className="outline-none ml-2 w-[320px] " />
            <div className=" ">
              <Pencil />
            </div>
          </div>
        </div>
        <div>
          <label> Birthdate</label>
          <div className=" border w-full h-[30.42px] rounded-[25px]  flex items-center relative">
            <input type="text" className="outline-none ml-2 w-[320px] " />
            <div className="mr-5 ">
              <Pencil />
            </div>
          </div>
        </div>
        <div>
          <label> Gender</label>
          <div className=" border w-full h-[30.42px] rounded-[25px] flex items-center relative">
            <input type="text" className="outline-none ml-2 w-[320px] " />
            <div className=" ">
              <Pencil />
            </div>
          </div>
        </div>
        <div>
          <label className="font-sans">Contact Info</label>
          <div className=" border w-full h-[30.42px] rounded-[25px]  flex items-center relative">
            <input type="text" className="outline-none ml-2 w-[320px] " />
            <div className=" ">
              <Pencil />
            </div>
          </div>
        </div>

        <button className="bg-[#0049F5] rounded-[25px] w-[247px] m-11  font-sans h-[36px] text-white px-10 ">
          {" "}
          save
        </button>
      </div>
       </form>

      
    </div>
  );
}

export default RightSideAccountSetting;
