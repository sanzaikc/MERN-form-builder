import React from "react";

import { Paper, List, Typography, Box, Divider } from "@mui/material";

import { FormInputItem } from "./FormInputItem";

const inputFields = [
  {
    label: "Text",
    type: "text",
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
        <List>
          {inputFields.map((item, index) => (
            <FormInputItem key={index} inputField={item} />
          ))}
        </List>
      </Box>
    </Paper>
  );
};
