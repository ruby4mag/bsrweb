import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocalState } from "../services/useLocalStorage";

interface Props {
  isLoggedin: boolean;
  onLogin: (state: boolean) => void;
}

const Logout = ({ onLogin }: Props) => {
  const navigate = useNavigate();

  let token: any;
  if (localStorage.getItem("jwt") !== "") {
    token = localStorage.getItem("jwt");
  } else {
  }
  const [jwt] = useLocalState(token, "jwt");
  console.log("Initial JWT is " + jwt);

  useEffect(() => {
    console.log(`JWT is ${jwt}`);

    console.log(`Token is ${token}`);
    localStorage.removeItem("jwt");

    axios
      .delete(
        "http://192.168.1.201:3000/session",

        {
          headers: {
            Authorization: "Bearer " + jwt,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        onLogin(false);
        console.log("Navigating to Login");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);

        //localStorage.removeItem("jwt");
      })
      .finally(() => {
        navigate("/login");
      });
  });

  return <></>;
};

export default Logout;
