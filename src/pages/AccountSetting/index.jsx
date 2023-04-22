import React from "react";
import AccoutSetting from "../../components/AccountSettings";
 import Header from"../../components/Header/index"
import LeftSideAccountSetting from "../../components/RightAccountSetting";

function AccoutSettingScreen() {
  return <div> 
    <div className="md:block hidden" >
    <Header />
    </div>
   <div className="flex">
   <AccoutSetting />
   <div className="md:block hidden">
   <LeftSideAccountSetting />
   </div>
   
   </div>
   
  </div>;
}

export default AccoutSettingScreen;
