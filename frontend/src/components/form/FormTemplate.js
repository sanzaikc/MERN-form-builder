import React from "react";

import { Box, Stack } from "@mui/material";

export const FormTemplate = ({ formElements }) => {
  return (
    <Stack spacing={4}>
      {formElements.map((item, index) => (
        <Box key={index}>{JSON.stringify(item)}</Box>
      ))}
    </Stack>
  );
};
