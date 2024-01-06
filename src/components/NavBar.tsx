import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import "./Navbar.css";
import { useLocalState } from "../services/useLocalStorage";
import LoginButton from "./LoginButton";

import LogoutButton from "./LogoutButton";

interface Props {
  loggedin: boolean;
  name: string;
}

export default function NavBar({ loggedin, name }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [jwt] = useLocalState("", "jwt");

  console.log("Initial JWT is " + jwt);
  console.log("JWT is now " + loggedin);
  console.log("Magin is " + name);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={2}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                {loggedin ? <LogoutButton /> : <LoginButton />}
                <Text>{name}</Text>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
