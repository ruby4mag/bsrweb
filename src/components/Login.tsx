import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<String>("");

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
        localStorage.setItem("userToken", res.data.session.jwt);
        setError("");
        navigate("/home");
      })
      .catch((error) => {
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
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="dark_mode" mb="0">
                Enable Dark Mode?
              </FormLabel>
              <Switch
                id="dark_mode"
                colorScheme="teal"
                size="lg"
                onChange={toggleColorMode}
              />
            </FormControl>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default Login;
