import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/Landing";
import NotFoundPage from "../../pages/NotFound/index";
import Register from "../../pages/Register/index";
import ShowInput from "../../pages/Showinput";

function PublicRoute() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default PublicRoute;
