import { Drawer } from "@mui/material";
import React from "react";

export const EditFieldDrawer = () => {
  const drawerWidth = 240;

  const [open, setOpen] = React.useState(true);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
    </Drawer>
  );
};
