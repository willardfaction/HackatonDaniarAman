import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useEffect, useState } from "react";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { login, register, logout, letter, checkAuth, deleteUser } = useAuth();

  const [userfordel, setuserfordel] = useState(null);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <Button
          style={{ marginLeft: "40px" }}
          color="secondary"
          variant="contained"
          onClick={() => navigate("/products")}>
          List of Games
        </Button>

        <Button
          color="inherit"
          onClick={() => navigate("/register")}
          className="register">
          Register
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/login")}
          className="login">
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            navigate("/");
            logout();
          }}>
          Logout
        </Button>
        <Button
          color="inherit"
          onClick={() => deleteUser(userfordel && userfordel.id)}>
          Delete
        </Button>
      </List>
    </Box>
  );

  const navigate = useNavigate();

  useEffect(() => {
    let userfordel = JSON.parse(localStorage.getItem("user"));
    setuserfordel(userfordel);
  }, []);

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="dark">
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
