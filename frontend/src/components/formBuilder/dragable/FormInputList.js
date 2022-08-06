import React from "react";

import { Paper, Typography, Box, Divider, Stack } from "@mui/material";

import { FormInputItem } from "./FormInputItem";

const inputFields = [
  {
    label: "Text",
    type: "text",
  },
  {
    label: "Number",
    type: "number",
  },
  {
    label: "Email",
    type: "email",
  },
  {
    label: "Phone",
    type: "tel",
  },
];

export const FormInputList = () => {
  return (
    <Paper>
      <Box padding={2}>
        <Typography>Input Fields</Typography>
        <Divider />
        <br />
        <Stack spacing={1}>
          {inputFields.map((item, index) => (
            <FormInputItem key={index} inputField={item} />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};
