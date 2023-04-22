import React from "react";

function Navigation() {
  return (
    <div>
      <div className="sm:mt-5  ml-3 mt-3 relative flex  w-full justify-center  ">
        <div className="sm:flex   sm:gap-5  bg-white  aboutUsShadow sm:rounded-[20px] w-[90%]  sm:h-[426px]  mr-5 h-[200px] mb-10 relative">
          <video width="100%" height="100%" controls>
            <source
              src={require("../../assests/video/countdown.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
