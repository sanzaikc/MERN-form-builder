import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const FormRadioGroupField = ({ options = [], label = "", ...props }) => {
  return (
    <FormControl fullWidth={props.fullWidth} required={props.required}>
      <FormLabel id="demo-radio-buttons-group-label" required={props.required}>
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
            disabled={props.disabled}
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
