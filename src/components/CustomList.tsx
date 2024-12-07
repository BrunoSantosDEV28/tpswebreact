import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

const CustomList: React.FC = () => {
  const items = [
    { id: 1, name: "Item de Alimentação" },
    { id: 2, name: "Item de Troca de Fralda" },
    { id: 3, name: "Item de Sono" },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CustomList;
