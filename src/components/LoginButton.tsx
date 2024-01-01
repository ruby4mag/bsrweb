import { Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <Button className="btnRes">
        <NavLink to="/login">Login</NavLink>
      </Button>
    </div>
  );
};

export default LoginButton;
