import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";
import Logo from "../Logo";

function Header() {
  const user = useSelector(selectUser);
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleShow = () => setShow(true);
  return (
    <div className="md:shadow-lg shadow-xl  bg-white px-5 overflow-hidden  sm:h-[100px]  rounded-b-lg  sm:w-full  sticky  ">
      <div className="items-center sm:pt-4 flex sm:justify-between sm:mr-5 mr-2  pt-2">
        <div>
          <Logo />
        </div>
        <div className=" hidden md:block">
          <div className="flex space-x-6 relative">
            <button className="text-[18px] font-sans border text-[#2A71E8]  px-[23px] font-bold rounded-[20px] py-[2px] border-[#cfcfcf]">
              HOME
            </button>
            <button className="text-[18px] font-sans border text-[#2A71E8]  px-[23px] font-bold rounded-[20px] py-[2px] border-[#cfcfcf]">
              TRANSLATE
            </button>
            <div>
              <h2 className="flex font-sans">
                Hello,
                <span>
                  <img
                    src={require("../../assests/img/hand.png")}
                    alt=""
                    className="w-4 h-4"
                  />
                </span>
              </h2>
              <h2 className="font-bold font-sans">{user.email}</h2>
            </div>
            <img
              src={require("../../assests/img/profile.png")}
              alt=""
              className=" cursor-pointer w-10 h-10 "
              onClick={(e) => handleLogout(e)}
            />
            {/* <div className={classNames(dropdown ? "absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " : "hidden")} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

              <Link onClick={(e) => handleLogout(e)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">log out </Link>

            </div> */}
          </div>
        </div>

        <div className="md:hidden ">
          <img
            src={require("../../assests/img/profile.png")}
            alt=""
            className=" ml-11 w-[60px] h-[60px]"
            onClick={(e) => handleLogout(e)}
          />
        </div>
      </div>
      <div className="md:hidden">
        <h3 className="font-sans text-[20px] font-semibold flex">
          Hello3,
          <span>
            <img
              src={require("../../assests/img/hand.png")}
              alt=""
              className="w-7 h-7"
            />
          </span>
        </h3>
        <h3 className=" font-sans text-[20px] font-bold ">{user.email}</h3>
      </div>
    </div>
  );
}

export default Header;
