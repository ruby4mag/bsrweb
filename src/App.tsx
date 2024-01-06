import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import Logout from "./components/Logout";
import { useState } from "react";
import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Tests from "./pages/tests/Tests";
import { createAction } from "./pages/tests/Newtest";

function App() {
  const [uloggedin, setUloggedin] = useState(
    localStorage.getItem("jwt") == '""' ? false : true
  );

  const [name, setName] = useState("");

  console.log("State1 is " + uloggedin);
  console.log("NAME is" + name);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/login"
          element={<Login name={name} onLogin={(name: any) => setName(name)} />}
        />
        <Route
          path="/logout"
          element={
            <Logout
              isLoggedin={uloggedin}
              onLogin={(state) => setUloggedin(state)}
            />
          }
        />
        <Route path="/" element={<RootLayout name={name} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tests" element={<Tests />} action={createAction} />
        </Route>
      </Route>
    )
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <Login name={name} onLogin={(name: any) => setName(name)} />,
  //   },
  //   {
  //     path: "/logout",
  //     element: (
  //       <Logout
  //         isLoggedin={uloggedin}
  //         onLogin={(state) => setUloggedin(state)}
  //       />
  //     ),
  //   },
  //   {
  //     path: "/",
  //     element: <RootLayout name={name} />,
  //     children: [
  //       { path: "/profile", element: <Profile /> },
  //       { path: "/tests", element: <Tests />, action: { createAction } },
  //       { path: "/dashboard", element: <Dashboard /> },
  //       { path: "/home", element: <Home /> },
  //     ],
  //   }, // <-- pass prop value
  // ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
