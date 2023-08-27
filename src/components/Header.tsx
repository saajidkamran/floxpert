import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import Logo from "../images/logo.svg";

import React from "react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", top: 0, zIndex: 40, position: "sticky" }}>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: "none", backgroundColor: "#272829", height: "62px" }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontSize={30}
            sx={{
              flexGrow: 1,
              cursor: "none",
              textAlign: "center",
              display: { fontWeight: "bold", xs: "block", sm: "block" },
            }}
          >
            <img
              style={{
                width: "100px",
                height: "100px",
                marginTop: "10px",
              }}
              src={Logo}
            />
            {/* Floxpert */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-180}
              duration={700}
              style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
            >
              <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>Home</Button>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-180}
              duration={700}
              style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
            >
              <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>about</Button>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={700}
              style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
            >
              <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(to bottom, #232526, #414345)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            },
          }}
        >
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-180}
            duration={700}
            style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
          >
            <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>Home</Button>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-180}
            duration={700}
            style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
          >
            <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>about</Button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
            style={{ fontSize: 16, marginRight: 5, color: "#fff" }}
          >
            <Button sx={{ fontSize: 16, mr: 5, color: "#fff" }}>Contact</Button>
          </Link>{" "}
        </Drawer>
      </Box>
    </Box>
  );
};
