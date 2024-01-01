import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LogoutButton = () => {
  return (
    <div>
      <Button className="btnRes">
        <NavLink to="/logout">Logout</NavLink>
      </Button>
    </div>
  );
};

export default LogoutButton;
