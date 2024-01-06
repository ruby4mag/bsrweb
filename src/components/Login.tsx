import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocalState } from "../services/useLocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<String>("");

  let token: any;
  const [jwt, setJwt] = useLocalState("", "jwt");
  if (localStorage.getItem("jwt") !== null) {
    token = localStorage.getItem("jwt");
  }

  console.log("Initial JWT is " + jwt);

  useEffect(() => {
    console.log(`JWT is ${jwt}`);

    if (jwt !== "") {
      console.log("I am going home");

      navigate("/dashboard");
    }
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Magin " + emailRef.current?.value, passwordRef.current?.value);

    axios
      .post(
        "http://192.168.1.201:3000/session.json",
        {
          session: {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setJwt(res.data.session.jwt);

        //localStorage.setItem("jwt", res.data.session.jwt);
        setError("");
        console.log("Navigating to Home");
        //navigate("/home");
      })
      .catch((error) => {
        console.log(error);

        setError(error.message);
      })
      .finally(() => {
        //navigate("/home");
      });
  };

  return (
    <>
      {error && <p>Login failed</p>}
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <form onSubmit={handleSubmit}>
          <Flex
            flexDirection="column"
            bg={formBackground}
            p={12}
            borderRadius={8}
            boxShadow="lg"
          >
            <Heading mb={6}>Log In</Heading>
            <Input
              ref={emailRef}
              placeholder="email"
              type="email"
              variant="filled"
              required={true}
              mb={3}
            />
            <Input
              ref={passwordRef}
              placeholder="**********"
              type="password"
              variant="filled"
              required={true}
              mb={6}
            />
            <Button type="submit" colorScheme="teal" mb={8}>
              Log In
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default Login;
