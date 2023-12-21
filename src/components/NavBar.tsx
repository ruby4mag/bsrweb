import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Photo from "./Photo";
import Name from "./Name";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name />

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              <Photo />
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <NavLink to="/home">Home</NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink to="/login">Login</NavLink>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          {}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button className="btnRes">
                  <NavLink to="/home">Home</NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink to="/login">Login</NavLink>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
