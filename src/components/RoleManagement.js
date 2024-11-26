import React, { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const RoleManagement = ({ roles, setRoles }) => {
  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    setRoles([...roles, newRole]);
    setNewRole("");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="New Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddRole}>
          Add Role
        </Button>
      </Box>

      <List>
        {roles.map((role, index) => (
          <ListItem key={index}>
            <ListItemText primary={role} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RoleManagement;
