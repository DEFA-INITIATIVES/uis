import React from "react";
import {Link} from"react-router-dom"

import { MdOutlineKeyboardArrowRight} from "react-icons/md";

const CustomButton = ({ id, text, Icon , active, hanldeClick, link}) => {

  console.log(active);

  return (
    <div className="m-1" id={id}> 
      <button
        onClick={ (e) => hanldeClick(id) }
        className={
          `border-[1px] hover:bg-red-600 transition-all duration-500 w-full h-[56px] sm:h-[30px]  hover:text-white border-black flex items-center
           justify-between mb-5 p-2  sm:w-[300px]  rounded-[25px]
           ${ active && "bg-red-600 text-white"}
           `
        }
      >
        <Icon size={17} />
        <div className="flex-1 flex items-center justify-between ">
          <h3 className=" flex-1 text-center text-[11px]  font-bold font-sans ml-3 mr-14  ">
           <Link to={ link}> {text}</Link> 
          </h3>
          <MdOutlineKeyboardArrowRight size={17} />
        </div>
      </button>
    </div>
  );
};

export default CustomButton;
