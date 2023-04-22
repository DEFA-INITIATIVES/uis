import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home";
import NotFoundPage from "../../pages/NotFound/index";
import ShowInput from "../../pages/Showinput";
import AccoutSettingScreen from "../../pages/AccountSetting";
import EditProfile from "../../pages/EditProfile";
import SubcriptionAndPaymentScreen from "../../pages/PaymentsAndSubcription/index";
import Logout from "../../pages/Logout";
import DisplayCustomization from "../../pages/DisplayAndCustomization";
import FeedBack from "../../pages/FeedBack";

function PrivateRoute() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" exact element={<NotFoundPage />} />
        <Route path="/showinput" exact element={<ShowInput />} />
        <Route path="/accountsetting" exact element={<AccoutSettingScreen/>} />
        <Route path="/editprofile" exact element={<EditProfile/>} />
      
        <Route path="/logout" exact element={<Logout/>} />
        <Route path="/customization" exact element={<DisplayCustomization/>} />
        <Route path="/payment" exact element={<SubcriptionAndPaymentScreen/>} />
        <Route path="/feedback" exact element={<FeedBack/>} />

       
        

      </Routes>
    </>
  );
}

export default PrivateRoute;
