import React, { useContext } from "react";

import { Box, Divider, Paper, Typography } from "@mui/material";

import { FormContext } from "../../context/FormContext";

export const FormInputEdit = () => {
  const { selectedElement } = useContext(FormContext);

  return (
    <Paper>
      <Box style={{ padding: 10 }}>
        <Typography>Edit Field</Typography>
        <Divider />
        <Box>{JSON.stringify(selectedElement, null, 2)}</Box>
      </Box>
    </Paper>
  );
};
