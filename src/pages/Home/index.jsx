import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MiddleCard from "../../components/MiddleCard";
import SubcriptionScreen from "../SubcriptionScreen/index";
import Topbar from "../../components/Topbar";
import LowerBar from "../../components/LowerBar";
import Navigation from "../../components/Navigation";
import {ReactComponent as SupportIcon }  from "../../assests/svgs/support.svg"

function Homepage() {
  const [displaySubscription, setDisplaySubscription] = useState(true);

  // useTimeout(() => setIdle(false), 1000 * 10);
  // clearTimeout(() => setIdle(false))
  useEffect(() => {
    setTimeout(setDisplaySubscription(true), 1000 * 10);
  }, []);

  const closeSubscription = () => {
    setDisplaySubscription(false);
  };

  return (
    <div>
      {displaySubscription === false ? (
        <div className="relative h-screen overflow-y-hidden">
          <Topbar />
          <Header />
          <div className="flex flex-col mt-2">
            <div className=" bg-[#fff] overflow-x-hidden overflow-y-auto h-[70vh] sm:h-[85vh] w-full z-10">
              <div>
                <div className="text-black font-sans font-bold text-[20px] sm:ml-[5rem] ml-3 mt-2 ">
                  About us
                </div>
                <MiddleCard />
              </div>
              <div>
                <div className="text-black font-sans font-bold text-[20px] sm:ml-[5rem] ml-3 mt-2 ">
                  Navigation
                </div>
                <Navigation />
              </div>
              <div>
                <div className="text-black font-sans font-bold text-[20px] sm:ml-[5rem] ml-3 mt-2 ">
                  Support
                </div>
                <div className="sm:mt-5  ml-3 mt-3  flex  w-full justify-center  ">
                  <div className="flex sm:gap-2 flex-col pb-6 font-[700] items-center justify-center bg-white cursor-pointer  aboutUsShadow rounded-[20px] w-[90%] sm:h-[166px]  mr-5 h-[120px] mb-10 relative">
                    <SupportIcon/>
                    <div>Customer Service Help Line</div>
                    <div>FAQS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden absolute bottom-0 z-40 w-full">
            <LowerBar />
          </div>
        </div>
      ) : (
        <div>
          <SubcriptionScreen ClosureCallback={closeSubscription} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
