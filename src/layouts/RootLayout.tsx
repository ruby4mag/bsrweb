import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function RootLayout() {
  const [uloggedin, setUloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );
  console.log("State is " + uloggedin);

  return (
    <>
      <Grid>
        <GridItem>
          <Navbar loggedin={uloggedin} />
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
