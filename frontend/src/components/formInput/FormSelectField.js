import React from "react";

import { MenuItem, Select } from "@mui/material";

export const FormSelectField = ({ options = [], ...props }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      size="small"
      label="Select"
      {...props}
    >
      {options.map((el) => (
        <MenuItem value={el.value}>{el.label}</MenuItem>
      ))}
    </Select>
  );
};
