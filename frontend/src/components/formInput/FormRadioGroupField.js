import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const FormRadioGroupField = ({
  options = [],
  label = "",
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" required={required}>
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        {...props}
      >
        {options.map((el, index) => (
          <FormControlLabel
            disabled={disabled}
            key={index}
            value={el.value}
            control={<Radio />}
            label={el.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
