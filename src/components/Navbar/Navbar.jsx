import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useEffect, useState } from "react";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { login, register, logout, letter, checkAuth, deleteUser } = useAuth();

  const [userfordel, setuserfordel] = useState(null);

  // React.useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     console.log("function worked in navbar");
  //     checkAuth();
  //   }
  // }, []);
  useEffect(() => {
    let userfordel = JSON.parse(localStorage.getItem("user"));
    setuserfordel(userfordel);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Game shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <button onClick={() => navigate("/products")}>List of Games</button>
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
