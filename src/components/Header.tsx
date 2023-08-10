import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      color="whitesmoke"
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h5" sx={{ my: 2 }}>
        Floxpert
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: "none", backgroundColor: "#4caf50" }}
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
            Floxpert
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ fontSize: 20, mr: 5, color: "#fff" }}>
                {item}
              </Button>
            ))}
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
              backgroundColor: "#388e3c",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
