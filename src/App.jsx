import React from "react"


import { selectUser } from "../src/features/userSlice"
import { useSelector } from "react-redux";

// import Homepage from "./pages/Home";

import PublicRoute from "./routes/PublicRoutes/index";
import PrivateRoute from "./routes/PrivateRoutes";
import AccoutSettingScreen from "./pages/AccountSetting";
import EditProfile from "./pages/EditProfile/index"
function App() {
  const user = useSelector(selectUser)
  return (
    <div>

      {user ? <PrivateRoute /> : <PublicRoute />}
      {/* <AccoutSettingScreen /> */}
      {/* <EditProfile /> */}

    </div>

  );
}

export default App;
