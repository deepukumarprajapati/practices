import { Home, LibraryAdd } from "@mui/icons-material";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const drawerWidth = 240;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={"/"}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Roadmap"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={"/react"}>
                <ListItemIcon>
                  <LibraryAdd />
                </ListItemIcon>
                <ListItemText primary={"What is Reacjs"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={"/hooks"}>
                <ListItemIcon>
                  <LibraryAdd />
                </ListItemIcon>
                <ListItemText primary={"Hooks"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftSidebar;
