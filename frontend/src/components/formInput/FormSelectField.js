import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const FormSelectField = ({
  options = [],
  label = "",
  required = false,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" required={required}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        label={label}
        value={options[0].value}
        {...props}
      >
        {options.map((el, index) => (
          <MenuItem key={index} value={el.value}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
