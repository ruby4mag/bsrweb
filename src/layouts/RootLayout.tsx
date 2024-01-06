import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

interface Props {
  name: string;
}

export default function RootLayout({ name }: Props) {
  const [uloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  //const [name, setName] = useState("");

  console.log("State2 is " + uloggedin + name);

  return (
    <>
      <Grid>
        <GridItem>
          <Navbar loggedin={uloggedin} name={name} />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        {/* sidebar */}
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ lg: "100vh" }}
          p={{ base: "20px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>

        {/* main content & navbar */}
        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}
