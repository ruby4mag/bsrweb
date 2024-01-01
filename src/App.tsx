import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
import { useState } from "react";

function App() {
  const [uloggedin, setUloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  console.log("State is " + uloggedin);

  return (
    <>
      <ChakraProvider>
        <NavBar loggedin={uloggedin} />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isLoggedin={uloggedin}
                onLogin={(state) => setUloggedin(state)}
              />
            }
          ></Route>
          <Route path="/home" element={<Home />}></Route>
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
