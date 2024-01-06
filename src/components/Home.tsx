import { useState } from "react";
import NavBar from "./NavBar";

const Home = () => {
  const [uloggedin, setUloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  console.log("State is " + uloggedin);

  return <>Hello</>;
};

export default Home;
