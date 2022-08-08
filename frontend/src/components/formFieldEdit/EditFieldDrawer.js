import React from "react";

import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { FormContext } from "../../contexts/FormContext";
import { FormEditField } from "../formBuilder/FormEditField";

const drawerWidth = 400;

export const EditFieldDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const { selectedElementIndex, setSelectedElementIndex, formElements } =
    React.useContext(FormContext);

  const inputElement = React.useMemo(
    () => formElements[selectedElementIndex],
    [formElements, selectedElementIndex]
  );

  const handleClose = () => {
    setOpen(false);
    setSelectedElementIndex(null);
  };

  React.useEffect(() => {
    if (inputElement) setOpen(true);
    else setOpen(false);
  }, [inputElement]);

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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft={4}
        paddingY={1}
      >
        <Typography variant="h6">Edit Field</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box paddingX={2} paddingY={1}>
        <FormEditField />
      </Box>
    </Drawer>
  );
};
