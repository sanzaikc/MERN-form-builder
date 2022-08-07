import { FormControl, FormLabel } from "@mui/material";
import React from "react";
import { BaseTextField } from "./BaseTextField";

export const FormWebsiteField = ({
  label,
  InputProps,
  value = "www.example.com",
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel id="demo-radio-buttons-group-label" required={props.required}>
        {label}
      </FormLabel>
      {!InputProps?.readOnly ? (
        <BaseTextField placeholder="Enter website link" {...props} />
      ) : (
        <a href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
      )}
    </FormControl>
  );
};
