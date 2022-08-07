import React from "react";

import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

export const FormSelectField = ({
  options = [],
  label = "",
  required = false,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel id="demo-radio-buttons-group-label" required={required}>
        {label}
      </FormLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        label={label}
        value={options[0]?.value ?? ""}
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
