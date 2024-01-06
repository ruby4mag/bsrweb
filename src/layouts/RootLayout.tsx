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

  console.log("State2 is " + uloggedin + name);

  return (
    <>
      <Grid>
        <GridItem>
          <Navbar loggedin={uloggedin} name={name} />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(8, 1fr)">
        {/* sidebar */}
        <GridItem
          as="aside"
          colSpan={{ base: 8, lg: 1, xl: 1 }}
          minHeight={{ lg: "100vh" }}
          p={{ base: "20px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>

        {/* main content & navbar */}
        <GridItem as="main" colSpan={{ base: 8, lg: 4, xl: 7 }}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}
