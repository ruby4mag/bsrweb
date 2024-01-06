import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4} textAlign={"left"}>
      <ListItem>
        <NavLink to="/dashboard">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="tests">
          <ListIcon as={AtSignIcon} color="white" />
          Tests
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={EditIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="home">
          <ListIcon as={AtSignIcon} color="white" />
          Home
        </NavLink>
      </ListItem>
    </List>
  );
}
