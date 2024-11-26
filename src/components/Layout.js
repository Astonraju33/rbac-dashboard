import React from "react";
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from "@mui/icons-material/Lock";

const drawerWidth = 240;

const Layout = ({ children, setPage }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            RBAC Dashboard
          </Typography>
        </Toolbar>
        <List>
          <ListItem button onClick={() => setPage("users")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
          <ListItem button onClick={() => setPage("roles")}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Role Management" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
