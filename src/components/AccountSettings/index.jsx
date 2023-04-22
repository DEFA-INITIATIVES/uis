import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import {
  BsArrowLeft,
  BsFillPersonFill,
  BsFillCollectionFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineLanguage } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { FaVoteYea } from "react-icons/fa";

import { MdDisplaySettings } from "react-icons/md";

import { VscFeedback } from "react-icons/vsc";
import Pencil from "../../assests/Icons/Pencil";

export default function AccoutSetting() {
  const [activeButton, setActiveButton] = useState(1);
  const [getId, setGetId] = useState(null);
  const [accontSettings, setAccountSettings] = useState([
    {
      id: 1,
      icon: RxAvatar,
      text: "Edit Profile",
      active: false,
      link: "/editprofile",
    },
    {
      id: 2,
      icon: MdDisplaySettings,
      text: "DISPLAY AND CUSTOMIZATION",
      active: false,
      link: "/customization",
    },
    {
      id: 3,
      icon: FaVoteYea,
      text: "PAYMENTS AND SUBSCRIPTION",
      active: false,
      link: "/payment",
    },
    {
      id: 4,
      icon: VscFeedback,
      text: " FEEDBACK",
      active: false,
      link: "/feedback",
    },
    {
      id: 5,
      icon: FiLogOut,
      text: " LOG OUT",
      active: false,
      link: "/logout",
    },
  ]);

  const hanldeClick = (id) => {
    //  console.log(id );

    //  const account = accontSettings.find((account) => account.id === id );
    let account = accontSettings.find((account) => account.id === id);

    //  console.log(account);

    let others = accontSettings.filter((account) => account.id !== id);

    others.forEach((account) => {
      account.active = false;
    });

    //  console.log(others);

    if (account) {
      account.active = true;
      // console.log(account);
      const transformed = [account, ...others];

      transformed.sort(function (elem1, elem2) {
        if (elem1.id < elem2.id) return -1;
        if (elem1.id > elem2.id) return 1;

        return 0;
      });

      // console.log(transformed);
      setAccountSettings(transformed);
    }

    // console.log("its working");
  };

  return (
    <div className=" sm:mr-5 overflow-hidden   ">
      <div className="sm:mt-5 sm:mr-5 ">
        <div className="bg-[#2A71E8] shadow w-[390px] h-[60px] sm:hidden mb-2"></div>

        <div className="border px-2 sm:hidden  h-[142px] ml-3  mt-3 rounded-[25px]  grid place-content-center w-[363px] bg-gradient-to-b   from-[#D62723]  to-[#2A71E8]">
          {" "}
          <div className="flex  absolute space-x-14 mt-3 ">
            <BsArrowLeft size={24} color="white" className="cursor-pointer" />
            <h3 className="text-white font-[20px] font-sans">
              Accounting Settings
            </h3>
          </div>
          <div className=" items-center">
            <div className="bg-white  rounded-full w-[90px] h-[90px] right-[150px]   border absolute border-gray-400  ">
              <img
                src={require("../../assests/img/profile.png")}
                alt=""
                className=" px-4 py-4   "
              />
              <div className="ml-10 pb-2 absolute">
                <Pencil />
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-sans font-bold text-[25px] ml-[130px] mb-2 sm:hidden mt-7">
          Andrew .M
        </h3>
        <div>
          <h2 className="mb-2 ml-[130px] font-sans font-semibold hidden md:block">
            {" "}
            Account Settings{" "}
          </h2>

          <div className="sm:shadow-lg sm:ml-5 rounded-[25px] pt-2  w-[392px] h-[340px] bg-white  justify-center">
            <div className="items-center p-4 grid place-content-center ">
              {accontSettings.map(
                ({ id, text, icon, active, setActive, link }) => (
                  <CustomButton
                    key={id}
                    id={id}
                    text={text}
                    Icon={icon}
                    active={active}
                    link={link}
                    hanldeClick={hanldeClick}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between rounded-b-50   sm:hidden px-5  bg-[#2A71E8] mt-5 items-center h-[76px] w-[390px]">
        <AiFillHome color="white" size={35} />
        <HiOutlineLanguage color="white" size={35} />
        <BsFillPersonFill color="white" size={35} />
      </div>
    </div>
  );
}
