import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import { useState } from "react";
import RootLayout from "./layouts/RootLayout";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  const [uloggedin, setUloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  console.log("State is " + uloggedin);

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<RootLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>

          <Route
            path="/logout"
            element={
              <Logout
                isLoggedin={uloggedin}
                onLogin={(state) => setUloggedin(state)}
              />
            }
          ></Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
