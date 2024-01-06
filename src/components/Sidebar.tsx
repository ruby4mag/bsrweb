import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List fontSize="1.2em" spacing={4} textAlign={"left"}>
      <ListItem>
        <NavLink to="/dashboard">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="tests">
          <ListIcon as={AtSignIcon} />
          Tests
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={EditIcon} />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="home">
          <ListIcon as={AtSignIcon} />
          Home
        </NavLink>
      </ListItem>
    </List>
  );
}
