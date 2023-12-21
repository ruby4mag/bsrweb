import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
