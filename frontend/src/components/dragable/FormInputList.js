import React from "react";

import { Paper, List, Typography } from "@mui/material";

import { FormInputItem } from "./FormInputItem";

const inputFields = [
  {
    name: "Text",
    type: "text",
  },
  {
    name: "Email",
    type: "email",
  },
  {
    name: "Phone",
    type: "tel",
  },
];

export const FormInputList = () => {
  return (
    <Paper>
      <Typography sx={{ paddingX: 3 }}>Input Fields</Typography>
      <List>
        {inputFields.map((item, index) => (
          <FormInputItem key={index} inputField={item} />
        ))}
      </List>
    </Paper>
  );
};
