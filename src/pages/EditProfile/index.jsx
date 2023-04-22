import React from "react";
import Pencil from "../../assests/Icons/Pencil";
import { BsArrowLeft, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineLanguage } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import AccoutSetting from "../../components/AccountSettings";
import Header from "../../components/Header";
import RightSideAccountSetting from "../../components/RightAccountSetting";



function EditProfile() {
  return (
    <>
    <div className="md:block hidden">
    <Header />
    </div>
    
     <div  className=" flex ">
      <div className="flex"> 
      <div> <AccoutSetting /></div>
      
     <RightSideAccountSetting />
      </div>
      
    
       <div className=" flex justify-between rounded-b-50   sm:hidden px-5  bg-[#2A71E8] mt-5 items-center h-[76px] w-[190px]">
        <AiFillHome color="white" size={35} />
        <HiOutlineLanguage color="white" size={35} />
        <BsFillPersonFill color="white" size={35} />
      </div>

    </div></>
   
  )
}

export default EditProfile