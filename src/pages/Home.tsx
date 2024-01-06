import { useState } from "react";

const Home = () => {
  const [uloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  console.log("State is " + uloggedin);

  return <>Hello</>;
};

export default Home;
